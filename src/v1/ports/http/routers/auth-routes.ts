import { Router, Request, Response } from "express";
import { AuthController } from "../controllers";
import Container from 'typedi';
import {AuthResponse} from '../../../adapters/response';
import { AuthRequest } from '../../../adapters/request';

const Auth = Router();
const controller = Container.get(AuthController)

Auth.route("/auth").post(async(req: AuthRequest, res: AuthResponse) => {
    return await  controller.login(req, res);
})