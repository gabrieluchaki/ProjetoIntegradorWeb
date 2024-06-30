import { Router } from "express";

import { ListUsuarioController } from "../../src/modules/usuarios/useCases/listUsuario/ListUsuarioController";
import { CreateUsuarioController } from "../../src/modules/usuarios/useCases/createUsuario/CreateUsuarioController";
import { DeleteUsuarioController } from "../../src/modules/usuarios/useCases/deleteUsuario/DeleteUsuarioController";
import { UpdateUsuarioController } from "../modules/usuarios/useCases/updateUsuario/UpdateUsuarioController";

const listUsuarioController = new ListUsuarioController()
const createUsuariosController = new CreateUsuarioController()
const deleteUsuarioController = new DeleteUsuarioController()
const updateUsuarioController = new UpdateUsuarioController() 

const usuariosRouter = Router()

usuariosRouter.get('/usuarios', listUsuarioController.handle)
usuariosRouter.post('/usuarios', createUsuariosController.handle)
usuariosRouter.delete('/usuarios/:id', deleteUsuarioController.handle)
usuariosRouter.put('/usuarios/:id', updateUsuarioController.handle)

export { usuariosRouter }