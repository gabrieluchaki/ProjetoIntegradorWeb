import { Usuario } from "../../entities/Usuario";
import { IUsuariosRepository } from "../IUsuariosRepository";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../database/data-source";

class UsuarioRepository implements IUsuariosRepository {
  private readonly repository: Repository<Usuario>

  constructor () {
    this.repository = AppDataSource.getRepository(Usuario)
  }

  async list (): Promise<Usuario[]> {
    const usuarios = await this.repository.find()
    return usuarios
  }
}

export { UsuarioRepository }