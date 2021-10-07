import { CarEntity } from "./CarEntity";

export class OwnerEntity{
    constructor(
       public aLastName: string, 
       public aFirstName: string, 
       public aMiddleName: string, 
       public aCars: CarEntity[]
    ) {}
}