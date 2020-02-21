/* eslint-disable */

// Basics
{
  let x: number = 3;
}

// Best common type
{
  let x = [0, 1, null];
}

// Contextual Typing
{
  window.onmousedown = function(mouseEvent: MouseEvent) {
    console.log(mouseEvent.button);   //<- OK
    // console.log(mouseEvent.kangaroo); //<- Error!
  };
}

{
  class Animal {}
  class Rhino extends Animal {}
  class Elephant extends Animal {}
  class Snake extends Animal {}

  function createZoo()/* : Animal[] */ {
    return [new Rhino(), new Elephant(), new Snake()/* , new Animal() */];
  }

  function test() {
    return new Animal();
  }

  const x = test();
}
