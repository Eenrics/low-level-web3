import { deploy, sayHello } from "./deploy-hello";

deploy().then(sayHello).catch(console.error)
