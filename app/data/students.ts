import { EntityType } from '../test/entity';
import { Person } from '../data/persons';
import { Group } from '../data/group';
import { Discipline } from '../data/discipline';
import { Olympiad } from '../data/olimpiad';
import { OnInit } from "@angular/core";

export class Student extends Person implements OnInit{
    
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public personalNumber: number,
                public numberDepartment: number,
                public studentGroup: Group,
                public age: number = 0,
                public disciplines: Discipline[],
                public olympiads: Olympiad[],
                public something: number[]
                ){
        super(name, surname, age);
    }
    ngOnInit(){
        this.nameEntity = this.getNameType(this);
    }
}