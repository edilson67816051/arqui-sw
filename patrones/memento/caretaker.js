export class Caretaker {
  mementos = []
  index = 0

  addMemento(memento) {
    this.mementos.push(memento)
    this.index = this.mementos.length - 1;
  }

  getNext() {
    if (this.index < this.mementos.length - 1)
    this.index += 1;
    
    return this.mementos[this.index]
  }

  getBack() {
    if (this.index > 0)
    this.index -= 1;

    return this.mementos[this.index]
  }
}