import { Usuario } from "../entities/Usuario";

interface IUsuariosRepository {
  list: () => Promise<Usuario[]>
  listPendentes: () => Promise<Usuario[]>
  create: (usuario: Usuario) => Promise<Usuario>
  delete: (id: string) => Promise<void>
  update: (usuario: Usuario) => Promise<Usuario>
  getById: (id: string) => Promise<Usuario | null>
  findOne: (email: string) => Promise<Usuario | null> 
}

export { IUsuariosRepository }