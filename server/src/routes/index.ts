import { Router } from "express";
import { usuariosRouter } from "./usuarios";


const router = Router()

router.use('/api', usuariosRouter)

export { router }