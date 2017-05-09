import { EntityType } from '../test/entity';
import { OnInit } from "@angular/core";

export class Person extends EntityType {

    constructor(public name: string,
                public surname: string,
                public age: number) {
            super();
            this.updateNameEntity();       
    }
}