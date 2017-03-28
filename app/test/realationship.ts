import { EntityType } from './entity';
import { TypeRealationShip } from './typerelationship';

export class RealationShip {
    realatedEntities: [EntityType, EntityType];
    name: string;
    isOneToOne: boolean;
    isOneToMany: boolean;
    isManyToMany: boolean;
    typeShip: TypeRealationShip;
}