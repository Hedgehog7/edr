import { EntityType } from '../test/entity';

export class EntityList<T> extends EntityType {

    private _values: Array<T>;

    constructor(){
        super();
        this.updateNameEntity();
    }

    public setValues(arg: Array<T>) {
        this._values = arg;
    }

    public getValues(): Array<T> {
        return this._values;
    }
}