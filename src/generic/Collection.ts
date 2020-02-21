export default class Collection<T> {
  private _array: T[] = [];

  public add(item: T): void {
    this._array.push(item);
  }

  public remove(item: T): void {
    const index = this._array.indexOf(item);
    if (index >= 0) {
      this._array.splice(index, 1);
    }
  }

  public get(index: number): T {
    return this._array[index];
  }
}
