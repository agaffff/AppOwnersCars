import { InMemoryDbService } from "angular-in-memory-web-api";
import { OwnerEntity } from "../OwnerEntity";

export class InMemoryOwnerService implements InMemoryDbService {
    createDb() {
        const owners = [
            {
                id: 1,
                aLastName: 'Петрова',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AC5623PT',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2009
                },
                {
                    numberCar: 'AC5624AA',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2010
                }]
            },

            {
                id: 2,
                aLastName: 'Ткачева',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AC5893CA',
                    brandCar: 'Kia',
                    modelCar: 'Sportage',
                    yearCar: 2019
                }]
            },

            {
                id: 3,
                aLastName: 'Пронина',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AO5555OA',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2008
                }]
            },

            {
                id: 4,
                aLastName: 'Зайцева',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AA8888AA',
                    brandCar: 'Mercedes',
                    modelCar: 'GLS',
                    yearCar: 2021
                }]
            },

        ];
        return { owners };

    }

  genId(owners: OwnerEntity[]): number {
    return owners.length > 0 ? Math.max(...owners.map(owner => owner.id as number)) + 1 : 1;
  }
}