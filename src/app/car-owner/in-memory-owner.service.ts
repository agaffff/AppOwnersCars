import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryOwnerService implements InMemoryDbService {
    createDb() {
        const owners = [
            {
                id: 1, aLastName: 'Петрова',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AC5623UY',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2009
                },
                {
                    numberCar: 'AC5624UY',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2010
                }]
            },

            {
                id: 2, aLastName: 'Ткачева',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AC5893UY',
                    brandCar: 'Kia',
                    modelCar: 'Sportage',
                    yearCar: 2019
                }]
            },

            {
                id: 3, aLastName: 'Пронина',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'LO5623UY',
                    brandCar: 'Hyundai',
                    modelCar: 'Accent',
                    yearCar: 2008
                }]
            },

            {
                id: 4, aLastName: 'Зайцева',
                aFirstName: 'Валентина',
                aMiddleName: 'Викторовна',
                aCars: [{
                    numberCar: 'AA5623UY',
                    brandCar: 'Mercedes',
                    modelCar: 'GLS',
                    yearCar: 2021
                }]
            },

        ];
        return { owners };

    }
}