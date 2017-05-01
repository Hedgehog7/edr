import { Tutor } from '../data/tutor';
import { EntityType } from '../test/entity';
import { Person } from '../data/persons';
import { DICTIONARY } from '../data/data-test';
import { Student } from '../data/students';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
    moduleId: module.id,
    selector: 'test-tabs',
    templateUrl: 'test-form.component.html',
    styleUrls: ['test-form.component.css']
})
export class TestTabsComponent {
    students: Student[];
    persons: Person[];
    tutors: Tutor[];
    variousTypes: EntityType[];

    constructor(private dataService: DataService) {
        this.persons = this.dataService.getPersons();
        this.students = this.dataService.getStudents();
        this.tutors = this.dataService.getTutors();
        this.variousTypes = this.dataService.getVariousTypes();
    }

    ngOnInit() {
        // this.persons = this.dataService.getPersons();
        // this.students = this.dataService.getStudents();
        // this.tutors = this.dataService.getTutors();
        // this.variousTypes = this.dataService.getVariousTypes();
    }
}

var json = 
{
    "type": "Person",
    "data": 
    {
        "name": "Ivan",
        "surname": "Zagoskin",
        "age": 21
    }
};

function deserialize(input: any) {
    let typeJson = input.type;
    let component: string = DICTIONARY.findComponent(typeJson);
    if(component=="PersonComponent") {
        return new Person(input.data.name, input.data.surname, input.data.age);
    } else if(component=="StudentComponent") {
        return new Person(input.data.name, input.data.surname, input.data.age);
    }
}