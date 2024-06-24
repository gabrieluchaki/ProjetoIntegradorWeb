import { Column, Entity, PrimaryColumn } from "typeorm"

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
}

export { Usuario }