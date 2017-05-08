
import { EntityType } from '../test/entity';

export class Discipline extends EntityType {
    constructor(
        public fullName: string,
        public shortName: string){
        super();
    }

    ngOnInit(){
        this.nameEntity = this.getNameType(this);
    }
}