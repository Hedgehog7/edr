import { EntityType } from '../test/entity';

export class Person extends EntityType {

    constructor(public name: string,
                public surname: string,
                public age: number) {
            super();       
    }
}