import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { IUsuariosRepository } from '../../repositories/IUsuariosRepository';
import { Usuario } from '../../entities/Usuario';

interface IRequest {
  email: string;
  senha: string;
}

interface IResponse {
  token: string;
  user: {
    id: string;
    name: string;
  };
}

class LoginUsuarioUseCase {
  constructor(private usuariosRepository: IUsuariosRepository) {}

  async execute({ email, senha }: IRequest): Promise<IResponse> {
    const user = await this.usuariosRepository.findOne(email);

    if (!user) {
      throw new Error('Email ou senha incorretos!');
    }

    if (!user.nome) {
      throw new Error('Email ou senha incorretos!');
    }

    if (!user.id) {
      throw new Error('Email ou senha incorretos!');
    }

    if (!user.senha) {
      throw new Error('Email ou senha incorretos!');
    }

    const passwordMatch = await compare(senha, user.senha);

    if (!passwordMatch) {
      throw new Error('Email ou senha incorretos!');
    }

    const token = sign({}, 'secret', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.nome,
      },
    };
  }
}

export { LoginUsuarioUseCase };
