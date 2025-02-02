import {injectable} from "inversify";
import {Success} from "../../../../shared/results/result_success.js";
import {Result} from "../../../../shared/results/type.js";

/**
 * @author Organisation_Name
 * @dev Devlopper_Name
 * @description Description_File
 * @version 1.0.0
 * @since Date_of_file_creation
 * @email Developper_contact
 */
@injectable()
class HelloWorldData {
  /**
   * @name Function_Name
   * @description Describe the Function
   * @param {data_type} Describe the param
   * @return {data_type} Describe the return
   */

  public sayTheHelloWorld(): Result<String, undefined> {
    return Success.result("Hello World !");
  }
}

export {HelloWorldData};
