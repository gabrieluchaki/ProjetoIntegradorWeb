import express, { NextFunction, Request, Response } from "express"
import "reflect-metadata"
import "express-async-errors"
import { AppDataSource } from "./src/database/data-source"
import { router } from "./src/routes/index"
import { AppError } from "./src/errors/AppError"
import path from "path"
import cors from "cors"
import { ZodError } from "zod"

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'app error',
      message: err.message
    })
  }

  if (err instanceof ZodError) {
    return response.status(400).json({
      status: 'zod error',
      message: err.issues
    })
  }

  return response.status(500).json({
    status: 'internal error',
    message: `Internal server error - ${err.message}`
  })
})

app.use(express.static(path.resolve(__dirname, 'public')))  

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000")
})

AppDataSource.initialize()
  .then(() => {
    console.log("DB RODANDO")
  })
  .catch((err) => {
    console.log("Erro no DB")
    console.log(err)
  })