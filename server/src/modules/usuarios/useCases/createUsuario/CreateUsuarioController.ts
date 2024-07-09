import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

class CreateUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, tipo, email, telefone, status, cpf, dataNascimento, genero, senha } = request.body;
    const usuarioRepository = new UsuarioRepository();
    const createUsuarioUseCase = new CreateUsuarioUseCase(usuarioRepository);

      const newUsuario = await createUsuarioUseCase.execute({
        nome,
        tipo,
        email,
        telefone,
        status,
        cpf,
        dataNascimento,
        genero,
        senha
      });

      return response.status(201).json(newUsuario);
  }
}

export { CreateUsuarioController };
