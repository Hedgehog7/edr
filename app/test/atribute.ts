import { EntityType } from './entity'

export class Atribute {
    // owner: EntityType;
    constructor (
        private _nameAtribute: string,
        private _typeAtribute: string) {}

    get nameAtribute(): string {
        return this._nameAtribute;
    }

    get typeAtribute(): string {
        return '';
    }
}