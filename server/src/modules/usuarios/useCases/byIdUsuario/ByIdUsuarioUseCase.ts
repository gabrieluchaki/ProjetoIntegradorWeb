import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";
import { z } from "zod"

class ByIdUsuarioUseCase {
  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute (id:string): Promise<Usuario> {
    z.string().uuid().parse(id)

    const usuarioExist = await this.usuarioRepository.getById(id)
    if (!usuarioExist) throw new Error("Usuario nao existe")

    return usuarioExist
  }
}

export { ByIdUsuarioUseCase }