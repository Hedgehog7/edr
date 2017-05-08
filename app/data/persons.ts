import { EntityType } from '../test/entity';
import { OnInit } from "@angular/core";

export class Person extends EntityType implements OnInit{

    constructor(public name: string,
                public surname: string,
                public age: number) {
            super();       
    }

    ngOnInit(){
        this.nameEntity = this.getNameType(this);
    }
}