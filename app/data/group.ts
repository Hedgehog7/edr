import { EntityType } from '../test/entity';
import { Person } from '../data/persons';

export class Group extends EntityType {
    
    constructor(public name: string,
                public yearStart: number,
                public specialization: string){
        super();
    }
}