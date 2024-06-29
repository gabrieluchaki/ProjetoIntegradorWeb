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

  // adicionar condição para conferir se já existe. utilizar findeOne

    const newUser = new Usuario()
    Object.assign(newUser, {nome, tipo, email, telefone})

    const usuario = this.usuarioRepository.create(newUser)
    return usuario
  }
}

export { CreateUsuarioUseCase }