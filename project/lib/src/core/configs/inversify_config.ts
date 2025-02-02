import { Container } from "inversify";
import { SayHelloToWorldController } from "../../features/app_feats/hello_world/controllers/say_hello_to_world_controller.js";
import { HelloWorldData } from "../../features/app_feats/hello_world/data/hello_to_world_data.js";

const httpContainer: Container = new Container();

//! data
httpContainer.bind<HelloWorldData>(HelloWorldData).toSelf();

//! controllers
httpContainer
  .bind<SayHelloToWorldController>(SayHelloToWorldController)
  .toSelf();

export { httpContainer };

