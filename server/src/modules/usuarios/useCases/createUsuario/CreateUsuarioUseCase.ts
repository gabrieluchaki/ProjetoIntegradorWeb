import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { z } from 'zod'

interface IRequest {
  nome: string
  tipo: string //'ADM'| 'COMUM' | 'PARCERIA' | 'MODERADOR'
  email: string // usar expresao regular?
  telefone: string // = 
}

const usuarioTipoSchema = z.union([
  z.literal('ADM'),
  z.literal('COMUM'),
  z.literal('PARCERIA'),
  z.literal('MODERADOR')
])

const createUsuarioSchema = z.object({
  nome: z.string(),
  tipo: usuarioTipoSchema,
  email: z.string(), // confirmar como usar rejex
  telefone: z.string()
})

class CreateUsuarioUseCase {

  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute({nome, tipo, email, telefone}: IRequest):Promise<Usuario> {
    createUsuarioSchema.parse({nome, tipo, email, telefone})

    const usuarioExist = await this.usuarioRepository.findOne(email)
    if (usuarioExist) throw new Error("Já existe usuário com esse email")
    
    const newUser = new Usuario()
    Object.assign(newUser, {nome, tipo, email, telefone})

    const usuario = await this.usuarioRepository.create(newUser)
    return usuario
  }
}

export { CreateUsuarioUseCase }