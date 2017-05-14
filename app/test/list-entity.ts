import { EntityType } from '../test/entity';

export class EntityList<T> {

    private  type: T;
    public values: Array<T>;

    public getTypeList(): T {
        return this.type;
    }

    public getValues(): Array<T> {
        return this.values;
    }
}