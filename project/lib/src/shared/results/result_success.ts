class Success<S> {
  constructor(public readonly data: S) {}

  public static result<S>(data: S) {
    return new Success(data);
  }
}

export {Success};
