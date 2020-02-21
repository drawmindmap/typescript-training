/* eslint-disable */

// Our First Interface
{
  interface LabeledValue {
    label: string;
  }

  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);
}


// Optional Properties
{
  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({color: "black"});
}


// Readonly properties
{
  interface Point {
    readonly x: number;
    readonly y: number;
  }

  let p1: Point = { x: 10, y: 20 };
  // p1.x = 5; // error!

  let a: number[] = [1, 2, 3, 4];
  let ro: ReadonlyArray<number> = a;
  // ro[0] = 12; // error!
  // ro.push(5); // error!
  // ro.length = 100; // error!
  // a = ro; // error!

  a = ro as number[];
}


// Function Types
{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
  }
}


// Class Types
// Implementing an interface
{
  interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }

  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
      this.currentTime = d;
    }
    constructor(h: number, m: number) { }
  }
}

// Difference between the static and instance sides of classes
{
  interface ClockConstructor {
    new (hour: number, minute: number): any;
  }
  
  interface ClockInterface {
    tick(): void;
  }
  
  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
  }
}

// Extending Interfaces
{
  interface Shape {
    color: string;
  }

  interface PenStroke {
    penWidth: number;
  }

  interface Square extends Shape, PenStroke {
    sideLength: number;
  }

  let square = {} as Square;
  square.color = "blue";
  square.sideLength = 10;
  square.penWidth = 5.0;
}

// Interfaces Extending Classes
{
  class Control {
    private state: any;
  }

  interface SelectableControl extends Control {
    select(): void;
  }

  class Button extends Control implements SelectableControl {
    select() { }
  }

  class TextBox extends Control {
    select() { }
  }

  // Error: Property 'state' is missing in type 'Image'.
  // class Image implements SelectableControl {
  //   private state: any;
  //   select() { }
  // }
}
