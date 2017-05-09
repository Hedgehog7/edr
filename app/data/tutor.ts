import { Person } from './persons';
import { OnInit } from '@angular/core';

export class Tutor extends Person {
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public scienceDegree: string,
                public personalNumber: number,
                public workExperience: number,
                public age: number ) {
        super(name, surname, age);
        this.updateNameEntity();
    }
}