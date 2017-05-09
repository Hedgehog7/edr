import { EntityType } from '../test/entity';

export class Group extends EntityType {
    
    constructor(public name: string,
                public yearStart: number,
                public specialization: string){
        super();
        this.updateNameEntity();
    }

}