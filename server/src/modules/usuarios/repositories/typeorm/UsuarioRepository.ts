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

  async create ( newUser: Usuario): Promise<Usuario> {
    const user = await this.repository.create(newUser)
    return user
  }

  async delete (id: string): Promise<void> {
    await this.repository.delete({id})
  }

  //confirmar se esta correto
  async update (upUsuario: Usuario): Promise<void> {
    await this.repository.update({ id: upUsuario.id}, upUsuario)
  }  
  async getById (id: string): Promise<Usuario | null> {
    const usuario = await this.repository.findOneBy({id})
    return usuario
  }
  
}

export { UsuarioRepository }