import { DataService } from '../services/data.service';
import { SOMEPERSONS, Person } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent {
    @Input() person: Person = SOMEPERSONS[0];
}