import { Request, Response } from "express";
import { UsuarioRepository } from "../../repositories/typeorm/UsuarioRepository";
import { ListPendentesUseCase } from "./ListPendentesUseCase";

class ListPendentesController {
  async handle (request: Request, response: Response): Promise<Response> {
    
    const usuarioRepository = new UsuarioRepository()
    const listPendentesuUseCase = new ListPendentesUseCase(usuarioRepository)
    
    const usuarios = await listPendentesuUseCase.execute()

    return response.status(200).json(usuarios)
  }
}

export { ListPendentesController }
