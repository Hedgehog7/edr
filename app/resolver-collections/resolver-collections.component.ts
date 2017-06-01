import { EntityType } from '../test/entity';
import { Component, Input, ElementRef } from '@angular/core';
import { DICTIONARYCOLL } from '../data/all-test-data';


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

    constructor(elem: ElementRef) {
        const tagName = elem.nativeElement.tagName.toLowerCase();
        console.log(tagName);
    }

    getNameComponent(): string {
        let typeCollection: string = Object.getPrototypeOf(this.collection).constructor.name;
        let typeObjects: EntityType = this.collection[0];
        let result: string = "default";
        if(typeObjects != null)
            for(let parentName of typeObjects.parents) {
                result = DICTIONARYCOLL.findComponent(typeCollection,parentName);
                if(result != "default")
                    break;
            }
        return result;
    }
}