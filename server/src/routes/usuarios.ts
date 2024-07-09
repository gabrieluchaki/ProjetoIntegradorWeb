import { Router } from "express";

import { ListUsuarioController } from "../../src/modules/usuarios/useCases/listUsuario/ListUsuarioController";
import { CreateUsuarioController } from "../../src/modules/usuarios/useCases/createUsuario/CreateUsuarioController";
import { DeleteUsuarioController } from "../../src/modules/usuarios/useCases/deleteUsuario/DeleteUsuarioController";
import { UpdateUsuarioController } from "../modules/usuarios/useCases/updateUsuario/UpdateUsuarioController";
import { ByIdUsuarioController } from "../modules/usuarios/useCases/byIdUsuario/ByIdUsuarioController";
import { LoginUsuarioController } from "../modules/usuarios/useCases/loginUsuario/LoginUsuarioController";

const loginUsuarioController = new LoginUsuarioController();
const listUsuarioController = new ListUsuarioController()
const createUsuariosController = new CreateUsuarioController()
const deleteUsuarioController = new DeleteUsuarioController()
const updateUsuarioController = new UpdateUsuarioController() 
const byIdUsuarioController = new ByIdUsuarioController()

const usuariosRouter = Router()

usuariosRouter.get('/usuarios', listUsuarioController.handle)
usuariosRouter.post('/usuarios', createUsuariosController.handle)
usuariosRouter.delete('/usuarios/:id', deleteUsuarioController.handle)
usuariosRouter.put('/usuarios/:id', updateUsuarioController.handle)
usuariosRouter.get('/usuarios/:id', byIdUsuarioController.handle)
usuariosRouter.post('/login', loginUsuarioController.handle);

export { usuariosRouter }