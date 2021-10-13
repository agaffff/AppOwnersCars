import { CarEntity } from "./CarEntity";

export interface OwnerEntity{
       id: number|null;
       aLastName: string;
       aFirstName: string;
       aMiddleName: string;
       aCars: CarEntity[];
      
}