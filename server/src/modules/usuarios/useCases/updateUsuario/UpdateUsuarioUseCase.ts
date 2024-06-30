import { Usuario } from "../../entities/Usuario";
import { z } from 'zod'
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

interface IRequest {
  id: string
  nome: string
  tipo: string 
  email: string
  telefone: string 
}

const usuarioTipoSchema = z.union([
  z.literal('ADM'),
  z.literal('COMUM'),
  z.literal('PARCERIA'),
  z.literal('MODERADOR')
])

const updateUsuarioSchema = z.object({
  id: z.string().uuid(),
  nome: z.string(),
  tipo: usuarioTipoSchema,
  email: z.string().email(),
  telefone: z.string()
})

class UpdateUsuarioUseCase {
  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute({id, nome, tipo, email, telefone}: IRequest):Promise<Usuario | null> {
    updateUsuarioSchema.parse({id, nome, tipo, email, telefone})

    const usuarioExist = await this.usuarioRepository.getById(id)
    if (!usuarioExist) throw new Error("Usuario nao existe")

    const usuarioAtt = Object.assign(usuarioExist, {nome, tipo, email, telefone})

    const usuario = await this.usuarioRepository.update(usuarioAtt)
    
    return usuario
  }
}

export { UpdateUsuarioUseCase }