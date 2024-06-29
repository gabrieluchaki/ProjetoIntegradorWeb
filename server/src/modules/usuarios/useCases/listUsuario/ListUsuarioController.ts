import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { ListUsuarioUseCase } from "./ListUsuarioUseCase";

class ListUsuarioController {
  async handle (request: Request, response: Response): Promise<Response> {
    const usuarioRepository = new UsuarioRepository()
    const listUsuarioUseCase = new ListUsuarioUseCase(usuarioRepository)

    const usuarios = await listUsuarioUseCase.execute()

    return response.status(200).json({usuarios})
  }
}

export { ListUsuarioController }