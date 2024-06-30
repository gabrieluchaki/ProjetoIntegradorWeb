import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

class DeleteUsuarioController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const usuarioRepository = new UsuarioRepository()
    const deleteUsuarioUseCase = new DeleteUsuarioUseCase(usuarioRepository)

    await deleteUsuarioUseCase.execute(id)

    return response.status(200).send({})
  }
}

export { DeleteUsuarioController }