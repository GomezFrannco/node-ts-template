import { App } from "server/app.server.js";

function main(port?: number): void {
  const app: App = new App(port);
  return app.listen();
}

main();
