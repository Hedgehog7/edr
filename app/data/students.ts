import { EntityType } from '../test/entity';
import { Person } from '../data/persons';
import { Group } from '../data/group';

export class Student extends Person {
    
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public personalNumber: number,
                public numberDepartment: number,
                public studentGroup: Group,
                public age: number = 0){
        super(name, surname, age);
    }
}