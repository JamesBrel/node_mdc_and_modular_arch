import {Failure} from "./result_failure.js";
import {Success} from "./result_success.js";

type Result<S, E> = Success<S> | Failure<E>;
export {Result};
