import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { z } from 'zod'
import { hash } from 'bcrypt';
interface IRequest {
  nome: string
  tipo: string 
  email: string 
  telefone: string // = 
  status: string
  cpf: string
  dataNascimento: Date
  genero: string
  senha: string
}

const usuarioTipoSchema = z.union([
  z.literal('ADM'),
  z.literal('COMUM'),
  z.literal('PARCERIA'),
  z.literal('MODERADOR')
])

const usuarioStatusSchema = z.union([
  z.literal('ATIVO'),
  z.literal('DESATIVADO'),
  z.literal('PENDENTE'),
  z.literal('BLOQUEADO')
])

const usuarioGeneroSchema = z.union([
  z.literal('MASCULINO'),
  z.literal('FEMININO')
])

const createUsuarioSchema = z.object({
  nome: z.string(),
  tipo: usuarioTipoSchema,
  email: z.string().email(), 
  telefone: z.string(),
  status: usuarioStatusSchema,
  cpf: z.string().min(11).max(11),
  dataNascimento: z.coerce.date(),
  genero: usuarioGeneroSchema,
  senha: z.string().min(6)
})

class CreateUsuarioUseCase {
  constructor(private readonly usuarioRepository: IUsuariosRepository) {}

  async execute({ nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha }: IRequest): Promise<Usuario> {
    createUsuarioSchema.parse({ nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha });

    const usuarioExist = await this.usuarioRepository.findOne(email);
    if (usuarioExist) throw new Error("Já existe usuário com esse email");

    const passwordHash = await hash(senha, 8);

    const newUser = new Usuario();
    Object.assign(newUser, { nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha: passwordHash });

    const usuario = await this.usuarioRepository.create(newUser);
    return usuario;
  }
}

export { CreateUsuarioUseCase }