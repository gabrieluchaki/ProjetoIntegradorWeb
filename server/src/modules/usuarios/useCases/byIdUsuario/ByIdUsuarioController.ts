import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { ByIdUsuarioUseCase } from "./ByIdUsuarioUseCase";

class ByIdUsuarioController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const usuarioRepository = new UsuarioRepository()
    const byIdUsuarioUseCase = new ByIdUsuarioUseCase(usuarioRepository)

    const usuario = await byIdUsuarioUseCase.execute(id)

    return response.status(200).json(usuario)
  }
}

export { ByIdUsuarioController }