import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

class ListUsuarioUseCase {
  
  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute (): Promise<Usuario[]> {
    const usuarios = await this.usuarioRepository.list()
    return usuarios
  }
}

export { ListUsuarioUseCase }