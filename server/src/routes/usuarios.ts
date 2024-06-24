import { Router } from "express";

import { ListUsuarioController } from "../../src/modules/usuarios/useCases/listUsuario/ListUsuarioController";

const listUsuarioController = new ListUsuarioController()

const usuariosRouter = Router()

usuariosRouter.get('/usuarios', listUsuarioController.handle)

export { usuariosRouter }