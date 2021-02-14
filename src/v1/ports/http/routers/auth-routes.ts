import { Router } from "express";
import { AuthController } from "../controllers";
import Container from 'typedi';
import {AuthResponse} from '../../../adapters/response';
import { AuthRequest } from '../../../adapters/request';
import { LoginSchema } from '../../../adapters/validators';

const Auth = Router();
const controller = Container.get(AuthController)
const validationMiddleware = require('./middlewares/validation')


Auth.route("/auth", validationMiddleware(LoginSchema)).post(async(req: AuthRequest, res: AuthResponse) => {
    return await  controller.login(req, res);
})