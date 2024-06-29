import { Router } from "express";

import { ListUsuarioController } from "../../src/modules/usuarios/useCases/listUsuario/ListUsuarioController";
import { CreateUsuarioController } from "../../src/modules/usuarios/useCases/createUsuario/CreateUsuarioController";

const listUsuarioController = new ListUsuarioController()
const createUsuariosController = new CreateUsuarioController()

const usuariosRouter = Router()

usuariosRouter.get('/usuarios', listUsuarioController.handle)
usuariosRouter.post('/usuarios', createUsuariosController.handle)
export { usuariosRouter }