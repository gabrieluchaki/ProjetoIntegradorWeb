import { Request, Response } from 'express';
import { UsuarioRepository } from '../../repositories/typeorm/UsuarioRepository';
import { LoginUsuarioUseCase } from './LoginUsuarioUseCase';

class LoginUsuarioController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, senha } = request.body;

    const usuarioRepository = new UsuarioRepository();
    const loginUsuarioUseCase = new LoginUsuarioUseCase(usuarioRepository);

      const tokenData = await loginUsuarioUseCase.execute({
        email,
        senha,
      });

      return response.json(tokenData);
  }
}

export { LoginUsuarioController };
