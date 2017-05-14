import { Atribute } from './atribute';
import { RealationShip } from './realationship';
import { DICTIONARY } from '../data/all-test-data';

export class EntityType {
    
    private _nameEntity: string = '';
    private _parentsEntities: EntityType[] = [];
    private _parents: string[] = [];
    private _atributes: Atribute[] = [];
    private _realathionShip: RealationShip;

    get nameEntity(): string {
        // this._nameEntity = this.constructor.name;
        return this._nameEntity;
    }

    set nameEntity(str: string) {
        this._nameEntity = str;
    }

    public updateNameEntity() {
        this._nameEntity = this.constructor.name;
    }

    get parents(): string[] {
        let obj = this;
        let typesNames: string[] = [];
        let typeName: string;
        do {
            typeName = this.getNameType(obj);
            typesNames.push(typeName);
            obj = Object.getPrototypeOf(obj);
        } while ((typeName) !== "Object")
        return typesNames;
    }

    get atributes(): Atribute[] {
        let tempListAtributes: Atribute[] = [];        
        
        for(let nameAtribute of Object.getOwnPropertyNames(this)) {
            tempListAtributes
                .push(new Atribute(nameAtribute,
                        this.getNameType(Object.getOwnPropertyDescriptor(this, nameAtribute).value)));
        }
        this._atributes = tempListAtributes;
        return tempListAtributes;
    }

    public addParentEntity(newParent: EntityType) {
        this._parentsEntities.push(newParent);
    }

    get parentsEntities(): EntityType[] {
        return this._parentsEntities;
    }

    /**
     * На вход подаётся объект на выходе тип объекта
     */
    public getNameType(obj: any): string {
        if(obj == null) {
            return 'null or undefined';
        } else {
            return Object.getPrototypeOf(obj).constructor.name;
        }
    }

    /**
     * Возвращает массива атрибутов без атрибутов "описания типа"
     */
    public getAtributesNames(): string[] {
        let namesOfAtributes: string[] = [];        
        let entityProp: string[] = Object.getOwnPropertyNames(new EntityType());

        for(let atribute of this.atributes) {
            if(entityProp.indexOf(atribute.nameAtribute)==-1)
                namesOfAtributes.push(atribute.nameAtribute);
        }
        // console.log(this);
        // console.log(namesOfAtributes);
        return namesOfAtributes;
    }

    /**
     * Возвращает атрибуты относящиеся только к EntityType nameEntity и т.д.
     */
    public getEntityNamesAttr(): string[] {
        return Object.getOwnPropertyNames(new EntityType());
    }

    /**
     * Возвращает атрибуты "коллекции"
    */
    public getArrayAtribute(): string[] {
        let arr: string[] = [];
        let entityProp: string[] = Object.getOwnPropertyNames(new EntityType());
        // console.log(entityProp);
        for(let atribute of this.getAtributesNames()) {
            // console.log(atribute + ' : ' + entityProp.indexOf(atribute));
            if(this.getNameType(this[atribute]) == 'Array' && entityProp.indexOf(atribute)==-1)
                arr.push(atribute);
        }
        return arr;
    }

    /**
     * Подбор компонента для "типа"
     */
    public getComponentNameOfType(): string {
        let nameComponent: string;
        for(let parentName of this.parents) {
            nameComponent = DICTIONARY.findComponent(parentName);
            if (nameComponent != null) {
                return nameComponent;
            }
        }
        return 'default';
        
    }
}
