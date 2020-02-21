/* eslint-disable */

// x is compatible with y if y has at least the same members as x
{
  interface Named {
    name: string;
  }

  let x: Named;
  // y's inferred type is { name: string; location: string; }
  let y = { name: "Alice", location: "Seattle" };
  x = y;

  function greet(n: Named) {
    console.log("Hello, " + n.name);
  }
  greet(y); // OK
}

// The source function should has less same parameters
{
  let x = (a: number) => 0;
  let y = (b: number, s: string) => 0;

  y = x; // OK
  // x = y; // Error

  let items = [1, 2, 3];

  // Don't force these extra parameters
  items.forEach((item, index, array) => console.log(item));

  // Should be OK!
  items.forEach(item => console.log(item));
}

// The source function’s return type be a subtype of the target type’s return type
{
  let x = () => ({name: "Alice"});
  let y = () => ({name: "Alice", location: "Seattle"});

  x = y; // OK
  // y = x; // Error, because x() lacks a location property
}

// When comparing the types of function parameters,
// assignment succeeds if either the source parameter is assignable to the target parameter, or vice versa
{
  enum EventType { Mouse, Keyboard }

  interface Event { timestamp: number; }
  interface MouseEvent extends Event { x: number; y: number }
  interface KeyEvent extends Event { keyCode: number }

  function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    /* ... */
  }

  // Unsound, but useful and common
  listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + "," + e.y));

  // Undesirable alternatives in presence of soundness
  listenEvent(EventType.Mouse, (e: Event) => console.log((e as MouseEvent).x + "," + (e as MouseEvent).y));
  listenEvent(EventType.Mouse, ((e: MouseEvent) => console.log(e.x + "," + e.y)) as (e: Event) => void);

  // Still disallowed (clear error). Type safety enforced for wholly incompatible types
  // listenEvent(EventType.Mouse, (e: number) => console.log(e));
}

// Enum values from different enum types are considered incompatible
{
  enum Status { Ready, Waiting };
  enum Color { Red, Blue, Green };

  let status = Status.Ready;
  // status = Color.Green;  // Error
}

// Private and protected members in a class affect their compatibility
{
  class A {
    // https://michalzalecki.com/nominal-typing-in-typescript/#approach-1-class-with-a-private-property
    // private __brand: void;
    name: string;
  }
  class B {
    name: string;
  }

  let a: A = new A();
  let b: B = new B();
  {
    b = a;
  }
  {
    a = b;
  }
}

// Generic type that has its type arguments specified acts just like a non-generic type
{
  interface NotEmpty<T> {
    data: T;
  }
  let x: NotEmpty<number>;
  let y: NotEmpty<string>;

  // x = y;  // Error, because x and y are not compatible
}