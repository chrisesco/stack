/**
Una pila es LIFO (Last in first out)
|     |
|    1|
|   21|
|  321|
El primer elemento en entrar en la pila anterior fue el 1,
y el ultimo es el 3, si desea sacar elementos de la pila, el primero que sale es el 3.
Operaciones basicas: Push(inserta) and pop(elimina)
empty
|     |
stack.push(1)
size = 1
     0
|    1|
En nuestra pila el 1 ocupa el primer elemento de la pila
y el unico hasta aca.
stack.push(2)
size = 2
    10
|   21|
Aca se ingreso un nuevo elemento, el primer elemento de la pila es el 1, y el ultimo elemento el 2.
stack.push(3)
|  321|
stack.pop()
|   21|

Otras operaciones

peek(): Muestra el ultimo de la pila sin sacarlo

*/

class Stack {
    constructor() { // En el constructor no hay elementos 
                 //porque puedo declarar la pila al principio sin los elementos
      this.stack = {};
      this.count = 0;
    }
    //{key:value,key:value,...}
    push(element) {
      this.stack[this.count] = element;
                 //{0:1}
      this.count++;
      return this.stack;
    }
    
    pop(){
        let claves = Object.keys(this.stack);
        let lenclaves = claves.length;
        let element = this.stack[lenclaves - 1];
        delete this.stack[lenclaves -1];
        this.count--;
        return element;
    }
    print() {
        console.log(this.stack);
      }
  }
  Stack.prototype.toString = function (){
    return this.stack;
  }
  
  //Ahora el programador hara uso de la pila
  const myStack = new Stack();
  console.log(myStack.push(6));
  console.log(myStack.push(8));
  console.log(myStack.push(9));
  myStack.print();
  console.log(myStack.pop());
  myStack.print();
  
/*
  var arr = [];
  console.log(arr);
  class Stack {
    constructor() {
      this.stack = {};
      this.count = 0;
    }
  
    push(element) {
      this.stack[this.count] = element;
      this.count++;
      return this.stack;
    }
  
    pop() {
      this.count--;
      const element = this.stack[this.count];
      delete this.stack[this.count];
      return element;
    }
  
    peek() {
      return this.stack[this.count - 1];
    }
  
    size() {
      return this.count;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
  const stack = new Stack();
  console.log(stack.size()); // 0
  console.log(stack.push('John Cena')); // { '0': 'John Cena' }
  console.log(stack.size()); // 1
  console.log(stack.peek()); // John Cena
  console.log(stack.push('The Rock')); // { '0': 'John Cena', '1': 'The Rock' }
  console.log(stack.size()); // 2
  stack.print(); // { '0': 'John Cena', '1': 'The Rock' }
  console.log(stack.peek()); // The Rock
  console.log(stack.pop()); // The Rock
  stack.print(); // { '0': 'John Cena' }
  console.log(stack.size()); // 1
  console.log(stack.peek()); // John Cena
  */