import { Usuario } from "../entities/Usuario";

interface IUsuariosRepository {
  list: () => Promise<Usuario[]>
}

export { IUsuariosRepository }