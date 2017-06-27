import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'resolver',
    templateUrl: 'resolver.component.html',
    styleUrls: []
})
export class ResolverComponent {
    @Input() entity: EntityType;
    @Input() editMode: Boolean = false;
}