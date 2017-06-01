import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';


/**
 * Компонент разрешающий какой из готовых компонентов применить
 */
@Component({
    moduleId: module.id,
    selector: 'resolver-collections',
    templateUrl: 'resolver-collections.component.html',
    styleUrls: []
})
export class ResolverComponentCollections {
    @Input() collection: any[] = [];
    @Input() editMode: Boolean = false;
}