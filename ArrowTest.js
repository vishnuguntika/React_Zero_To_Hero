const obj = {
  fn: function() {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  },
};

obj.fn(); // fn as obj
obj.fn2(); // window due to arrow functions.


function x(){
  console.log(this);
  function y(){
    console.log(this);
    function z(){
      console.log(this);
    }
    z(); // return window

  }
  y(); // return window
}

x(); // return window


const person = {
  name: "Vishnu",
  print: function(){
    console.log(this);
  }
}

const person2 = {
  name: "Prasad"
}

function x(){
  console.log(this);
}
x();

x.call(this); // returns window
x.call(person); // { name: 'Vishnu' }
x.call(person2); // { name: 'Prasad' }


person.print(); // { name: 'Vishnu', print: [Function: print] }
person.print.call(); // return window
person.print.call(this); // return window
person.print.call(person2); // { name: 'Prasad' }



const object1 = {
  firstName: "Naga",
  printName: ()=> {
    console.log(this.firstName);
  },
  printName2: function (){
    console.log(this.firstName);
  }
}

object1.printName(); // undefined due to its lexical scope.
object1.printName2(); // Naga
object1.printName.call(); // undefined due to its lexical scope.
