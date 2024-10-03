import {Result} from "../../../../../shared/results/type.js";

interface IHelloWorld {
  sayTheHelloWorld(): Result<string, undefined>;
}

export {IHelloWorld};
