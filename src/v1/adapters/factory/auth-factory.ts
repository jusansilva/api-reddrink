import Container, { Service } from "typedi";
import { FactoryName } from "../enums";
import { AuthFacade } from "../facade";
import { Factory } from "../adapter-factory";
import { AuthBusiness } from "../../business/logic";

@Service(FactoryName.BusinessAuth)
export class AuthFactory implements Factory<AuthFacade> {
    build(): AuthFacade {
        return Container.get(AuthBusiness);
    }
}