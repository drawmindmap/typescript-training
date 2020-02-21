/* eslint-disable */

// Hello World of Generics
{
  function identity1<T>(arg: T): T {
    return arg;
  }

  let output = identity1<string>("myString");  // type of output will be 'string'

  let output1 = identity1("myString");  // type of output will be 'string'
}

// Generic Types
{
  interface GenericIdentityFn {
    <T>(arg: T): T;
  }

  function identity2<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn = identity2;
}

{
  interface GenericIdentityFn<T> {
    (arg: T): T;
  }

  function identity3<T>(arg: T): T {
    return arg;
  }

  let myIdentity: GenericIdentityFn<number> = identity3;
}

// Generic Classes
{
  class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
  }

  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function(x, y) { return x + y; };

  let stringNumeric = new GenericNumber<string>();
  stringNumeric.zeroValue = "";
  stringNumeric.add = function(x, y) { return x + y; };

  console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
}

// Generic Constraints
{
  interface Lengthwise {
    length: number;
  }

  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
  }

  // loggingIdentity(3);  // Error, number doesn't have a .length property
  loggingIdentity({length: 10, value: 3});
}

// Using Type Parameters in Generic Constraints
{
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  let x = { a: 1, b: 2, c: 3, d: 4 };

  getProperty(x, "a"); // okay
  // getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
}

// Using Class Types in Generics
{
  class BeeKeeper {
    hasMask: boolean;
  }

  class ZooKeeper {
    nametag: string;
  }

  class Animal {
    numLegs: number;
  }

  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }

  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }

  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }

  createInstance(Lion).keeper.nametag;  // typechecks!
  createInstance(Bee).keeper.hasMask;   // typechecks!
}

// example
import Shape from './generic/Shape';
import Rect from './generic/Rect';
import Collection from './generic/Collection';

function log<T extends Shape>(shape: T): void {
  // eslint-disable-next-line no-console
  console.log(shape.name);
}

const rect = new Rect('rect', 10, 20);
log(rect);

const collection = new Collection<Shape>();
collection.add(rect);
console.log(collection.get(0).name);