/* eslint-disable */

// Boolean
{
  let isDone: boolean = false;
}


// Number
{
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
}


// String
{
  let color: string = "blue";
  color = "red";

  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.

  I'll be ${age + 1} years old next month.`;
}


// Array
{
  let list1: number[] = [1, 2, 3];

  let list2: Array<number> = [1, 2, 3];
}


// Tuple
{
  // Declare a tuple type
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  // Initialize it incorrectly
  // x = [10, "hello"]; // Error

  console.log(x[0].substring(1)); // OK
  // console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

  // x[3] = "world"; // Error, Property '3' does not exist on type '[string, number]'.

  // console.log(x[5].toString()); // Error, Property '5' does not exist on type '[string, number]'.
}


// Enum
{
  enum Color {
    Red = 0,
    Green = 2,
    Blue = 4
  };
  let c: Color = Color.Green;

  let colorName: string = Color[2];
  console.log(colorName); // Displays 'Green' as its value is 2 above
}


// Any
{
  let notSure: any = 4;
  notSure = "maybe a string instead";
  notSure = false; // okay, definitely a boolean

  let notSure1: any = 4;
  // notSure1.ifItExists(); // okay, ifItExists might exist at runtime
  notSure1.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

  let prettySure: Object = 4;
  // prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

  let list: any[] = [1, true, "free"];
  list[1] = 100;
}


// Void
{
  function warnUser(): void {
    console.log("This is my warning message");
  }
}


// Never
{
  // Function returning never must have unreachable end point
  function error(message: string): never {
    throw new Error(message)
  }

  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }

  // Function returning never must have unreachable end point
  function infiniteLoop(): never {
    while (true) {}
  }
}


// Object
{
  function create(o: object): void {
    console.log(o);
  }

  create({ prop:0 }); // OK
  create(null); // OK
  create(undefined); // OK

  // create(42); // Error
  // create("string"); // Error
  // create(false); // Error


  // Type assertions
  let someValue: any = "this is a string";
  let strLength1: number = (<string>someValue).length;
  let strLength2: number = (someValue as string).length;
  console.log(strLength1, strLength2);
}