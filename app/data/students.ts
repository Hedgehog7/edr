import { EntityType } from '../test/entity';
import { Person } from '../data/persons';
import { Group } from '../data/group';
import { Discipline } from '../data/discipline';

export class Student extends Person {
    
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public personalNumber: number,
                public numberDepartment: number,
                public studentGroup: Group,
                public age: number = 0,
                // public disciplines: Discipline[]
                ){
        super(name, surname, age);
    }
}