import { Router } from "express";
import { Auth } from "./auth-routes";
const v1 = Router();
v1.use(Auth);

export { v1 };
