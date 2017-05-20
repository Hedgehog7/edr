import { Tutor, Person, DICTIONARY, Student } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { EntityList } from '../test/list-entity';
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
    sd: EntityList<any>;

    constructor(private dataService: DataService) {
        this.persons = this.dataService.getPersons();
        this.students = this.dataService.getStudents();
        this.tutors = this.dataService.getTutors();
        this.variousTypes = this.dataService.getVariousTypes();
        this.sd = new EntityList<any>();
        this.sd.setValues(this.dataService.getStudents());
    }

    ngOnInit() {}
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