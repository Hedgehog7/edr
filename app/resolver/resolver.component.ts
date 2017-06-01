// import { SOMEPERSONS, STUDENTS} from '../data/students';
import { SOMEPERSONS, STUDENTS, Person} from '../data/all-test-data';
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
    @Input() editMode: Boolean = false;

    ngOnInit() {
        // console.log(this.entity);
    }
}