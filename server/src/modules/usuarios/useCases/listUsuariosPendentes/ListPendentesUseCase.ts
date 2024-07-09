import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../../repositories/IUsuariosRepository";

class ListPendentesUseCase {
  constructor (private readonly usuarioRepository: IUsuariosRepository) { }

  async execute ():Promise<Usuario[]> {
    const usuarios = await  this.usuarioRepository.listPendentes()
    return usuarios
  }
}

export { ListPendentesUseCase }