import { Inject } from "typedi";
import { FactoryName } from "../../adapters/enums";
import { AuthFacade } from "../../adapters/facade";

export class AuthBusinessDelegate implements AuthFacade {
    @Inject(FactoryName.BusinessAuth)
    private readonly factory = new AuthFactory();

    
}