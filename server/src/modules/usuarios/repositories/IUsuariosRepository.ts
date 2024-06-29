import { Usuario } from "../entities/Usuario";

interface IUsuariosRepository {
  list: () => Promise<Usuario[]>
  create: (usuario: Usuario) => Promise<Usuario>
  delete: (id: string) => Promise<void>
  update: (usuario: Usuario) => Promise<void>
  getById: (id: string) => Promise<Usuario | null>
}

export { IUsuariosRepository }