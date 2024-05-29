import {Container} from "inversify";
import {SayHelloToWorldController} from "../../modules/hello_mod/features/say_hello_to_world/controllers/say_hello_to_world_controller.js";
import {HelloWorldImpl} from "../../modules/hello_mod/features/say_hello_to_world/data/impls/hello_to_world_impl.js";
import {IHelloWorld} from "../../modules/hello_mod/features/say_hello_to_world/data/interfaces/hello_to_world_inter.js";

const httpContainer: Container = new Container();

//! impls
httpContainer.bind<IHelloWorld>(HelloWorldImpl).to(HelloWorldImpl);

//! controllers
httpContainer
  .bind<SayHelloToWorldController>(SayHelloToWorldController)
  .toSelf();

export {httpContainer};
