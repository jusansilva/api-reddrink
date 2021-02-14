import { AuthResponse } from "../response";

export interface AuthFacade {
    login: (dto) => Promise<AuthResponse>;
}