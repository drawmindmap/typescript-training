import Shape from './Shape';

export default class Rect extends Shape {
  private _x: number;

  private _y: number;

  public constructor(name: string, x: number, y: number) {
    super(name);
    this._x = x;
    this._y = y;
  }

  public get x(): number {
    return this._x;
  }

  public get y(): number {
    return this._y;
  }
}
