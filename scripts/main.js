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
    constructor() { 
      this.stack = {};
      this.top = -1;
    }
    
    isEmpty(){
        if (this.top === -1) {
            return true;
        }else{
            return false;
        }
    }

    push(element) {
      this.top++;
      this.stack[this.top] = element;
      return this.stack;
    }
    
    pop(){
        if (this.isEmpty()){
            throw "Underflow"
        }
        else{
            let claves = Object.keys(this.stack);
            let lenclaves = claves.length;
            let element = this.stack[lenclaves - 1];
            delete this.stack[lenclaves -1];
            this.top--;
            return element;
        }
    }
    peek(){
        let nextTop = this.top;
        return this.stack[nextTop--];
    } 
    print() {
        console.log(this.stack);
      }
  }
  Stack.prototype.toString = function (){
    return this.stack;
  }
  
  //Now the developer will use the stack in his code
  const myStack = new Stack();
  console.log(myStack.push(6));
  console.log(myStack.push(8));
  console.log(myStack.peek());
  myStack.print()
  console.log(myStack.push(9));
  myStack.print();
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  console.log(myStack.pop());
  myStack.print();
  