import { Usuario } from "../../entities/Usuario";
import { z } from 'zod'
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

interface IRequest {
  id: string
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

const updateUsuarioSchema = z.object({
  id: z.string().uuid(),
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

class UpdateUsuarioUseCase {
  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute({id, nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha}: IRequest):Promise<Usuario | null> {
    updateUsuarioSchema.parse({id, nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha})

    const usuarioExist = await this.usuarioRepository.getById(id)
    if (!usuarioExist) throw new Error("Usuario nao existe")

    const usuarioAtt = Object.assign(usuarioExist, {nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha})

    const usuario = await this.usuarioRepository.update(usuarioAtt)
    
    return usuario
  }
}

export { UpdateUsuarioUseCase }