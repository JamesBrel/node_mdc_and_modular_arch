class Failure<E> {
  constructor(public readonly data: E) {}

  public static result<E>(data: E) {
    return new Failure(data);
  }
}

export {Failure};
