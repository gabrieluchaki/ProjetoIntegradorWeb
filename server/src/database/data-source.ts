import "dotenv/config"
import { DataSource } from "typeorm"
import { TableUsuarios1718152095277 } from "./migrations/1718152095277-tableUsuarios"
import { Usuario } from "../modules/usuarios/entities/Usuario"


const AppDataSource = new DataSource({
  type:"mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: "eco_comunidade",
  entities: [Usuario],
  migrations: [
    TableUsuarios1718152095277
  ]
})

export { AppDataSource }