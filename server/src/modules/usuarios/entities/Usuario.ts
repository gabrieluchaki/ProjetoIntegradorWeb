import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('usuarios')
class Usuario {
  
  @PrimaryColumn()
  id?: string
  
  @Column()
  nome?: string

  @Column()
  tipo?: 'ADM' | 'COMUM' | 'PARCERIA' | 'MODERADOR' | 'BIOLOGO'

  @Column()
  email?: string

  @Column()
  telefone?: string

  constructor () {
    this.id = uuidv4()
  }
  
}

export { Usuario }