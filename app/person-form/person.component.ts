import { DataService } from '../services/data.service';
import { SOMEPERSONS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';
import { Person } from '../data/persons';

@Component({
    moduleId: module.id,
    selector: 'person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent {
    @Input() person: Person = SOMEPERSONS[0];
}