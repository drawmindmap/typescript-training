/* eslint-disable */

// Numeric enums
{
  enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
}

// use enums
{
  enum Response {
    No = 0,
    Yes = 1,
  }

  function respond(recipient: string, message: Response): void {
    // ...
  }

  respond("Princess Caroline", Response.Yes)

  let a: Response;
  a = 2;
  a = Response.Yes;
  console.log(JSON.stringify(a));
}

// String enums
{
  enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

  let a: Direction;
  a = Direction.Right;
  console.log(JSON.stringify(a));
}

