import { Column, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'

@Entity('usuarios')
class Usuario {
  
  @PrimaryColumn()
  id?: string

  @Column()
  nome?: string

  @Column()
  status?: 'ATIVO' | 'DESATIVADO' | 'PENDENTE' | 'BLOQUEADO'

  @Column()
  cpf?: string
  
  @Column({name: 'data_nascimento'})
  dataNascimento?: Date 

  @Column()
  genero?: 'MASCULINO' | 'FEMININO' 
  
  @Column()
  tipo?: 'ADM' | 'COMUM' | 'PARCERIA' | 'MODERADOR' | 'BIOLOGO'

  @Column()
  email?: string

  @Column()
  senha?: string

  @Column()
  telefone?: string

  //colocar foto

  constructor () {
    this.id = uuidv4()
  }
  
}

export { Usuario }