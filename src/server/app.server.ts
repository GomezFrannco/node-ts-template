import express, { Application } from "express";
import indexRoute from "../routes/index.routes.js";

export class App {
  public port?: number | string;
  private app: Application;
  constructor(port = 8080) {
    this.app = express();
    this.port = port || process.env.PORT;
    this.middlewares();
  }
  private settings(): void {
    this.app.set("port", this.port);
  }
  private middlewares(): void {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }
  private routes(): void {
    this.app.use(indexRoute);
  }
  public listen(): void {
    this.app.listen(this.app.get("port"), (): void => {
      console.log("Listening on port:", this.app.get("port"));
    });
  }
}
