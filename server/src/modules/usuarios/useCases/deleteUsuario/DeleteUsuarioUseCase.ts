import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { z } from 'zod'

class DeleteUsuarioUseCase {
  constructor (private readonly usuarioRepository: IUsuariosRepository ) { }

  async execute (id: string):Promise<void> {
    z.string().uuid().parse(id)

    const usuarioExist = this.usuarioRepository.getById(id)
    if (!usuarioExist) throw new Error("Usuario nao existe")
    
    await this.usuarioRepository.delete(id)
 }
}

export { DeleteUsuarioUseCase }