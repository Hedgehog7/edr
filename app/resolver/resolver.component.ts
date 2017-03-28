// import { SOMEPERSONS, STUDENTS} from '../data/students';
import { SOMEPERSONS, STUDENTS} from '../data/data-test';
import { Person } from '../data/persons';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';


/**
 * Компонент разрешающий какой из готовых компонентов применить
 */
@Component({
    moduleId: module.id,
    selector: 'resolver',
    templateUrl: 'resolver.component.html',
    styleUrls: []
})
export class ResolverComponent {
    @Input() entity: EntityType;
}