import {Result} from "../../../../../../shared/results/type.js";

interface IHelloWorld {
  sayTheHelloWorld(): Promise<Result<string, undefined>>;
}

export {IHelloWorld};
