import { EntityType } from '../test/entity';
import { Discipline } from '../data/discipline';

export class Olympiad extends EntityType {
    
    constructor(public name: string,
                public year: number,
                public result: string,
                public discipline: Discipline){
        super();
    }

    ngOnInit(){
        this.nameEntity = this.getNameType(this);
    }
}