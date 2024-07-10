import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { v4 as uuidv4 } from 'uuid'
import { Usuario } from "../../usuarios/entities/Usuario"

@Entity()
class Artigos {
  @Column()
  id?: string

  @Column()
  artigo?: BinaryType // buffer , binary ... ?

  @Column()
  idUsuario?: string

  @ManyToOne(() => Usuario, (usuario) => usuario.artigos, {
    onDelete:'SET NULL'
  })
  @JoinColumn({name:'usuario_id'})
  usuario?: Usuario
  
  constructor () {
    this.id = uuidv4()
  }
}

export { Artigos }