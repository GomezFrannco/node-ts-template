import { Request, Response } from "express";

export function index(_req: Request, res: Response) {
  return res.json({
    message: "Welcome!",
  });
}
