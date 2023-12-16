import { Memento } from "./memento.js"

export class Originator {
  nombre = ''
  direccion = ''
  telefono = ''

  setMemento(memento){
    this.nombre = memento.getNombre()
  }

  createMemento(){
    const memento = new Memento()
    memento.setNombre(this.nombre)

    return memento
  }
}