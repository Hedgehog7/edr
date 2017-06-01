import { EntityType } from '../test/entity';

export class EntityList<T> {

    private _values: Array<T>;

    public setValues(arg: Array<T>) {
        this._values = arg;
    }

    public getValues(): Array<T> {
        return this._values;
    }
}