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
    /*
    pop(){
        let claves = Stack.
    }*/
  
  }
  Stack.prototype.toString = function (){
    return this.stack;
  }
  
  //Ahora el programador hara uso de la pila
  const myStack = new Stack();
  myStack.push(6);
  myStack.push(8);
  console.log(myStack);
/*
  var arr = [];
  console.log(arr);*/