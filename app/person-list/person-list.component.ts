import { DataService } from '../services/data.service';
import { Component, Input } from '@angular/core';

import { Person } from '../data/persons';
import { STUDENTS, SOMEPERSONS } from '../data/data-test';

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {
    @Input() persons: Person[];
    // persons: Person[] = STUDENTS;    
    // constructor(private dataService: DataService) {}

    // ngOnInit() {
    //     this.persons = this.dataService.getPersons();
    // }
}