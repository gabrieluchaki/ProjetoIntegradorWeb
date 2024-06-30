import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";

class UpdateUsuarioController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const {nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha} = request.body

    const usuarioRepository = new UsuarioRepository()
    const updateUsuarioUseCase = new UpdateUsuarioUseCase(usuarioRepository)

    const usuarioAtt = await updateUsuarioUseCase.execute({id, nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha})

    return response.status(200).json({usuarioAtt})
  }
}

export { UpdateUsuarioController }