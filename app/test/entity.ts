import { Atribute } from './atribute';
import { RealationShip } from './realationship';
import { DICTIONARY } from '../data/data-test';


export class EntityType {

    private _nameEntity: string;
    private _parent: string[];
    private _atributes: Atribute[];

    set nameEntity(newName: string) {
        this._nameEntity = newName;
    }

    get nameEntity(): string {
        return this.constructor.name;
    }

    get parent(): string[] {
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

    get atributes(): Atribute[]{
        let tempStrAtributes: string[] = Object.getOwnPropertyNames(this);
        let tempListAtributes: Atribute[] = [];        
        for(let nameAtribute of Object.getOwnPropertyNames(this)) {
            tempListAtributes.push(new Atribute(nameAtribute, ''));
        }
        return tempListAtributes;
    }

    public getNameType(obj: any): string {
        // if(Object.getPrototypeOf(obj).constructor !==)
        if(obj == null) {
            return 'null or undefined';
        } else {
            return Object.getPrototypeOf(obj).constructor.name;
        }
    }

    public getAtributesNames(): string[] {
        let namesOfAtributes: string[] = [];
        for(let atribute of this.atributes) {
            namesOfAtributes.push(atribute.nameAtribute);
        }
        return namesOfAtributes;
    }

    public getNamesAtrubutesTypes(): string[] {
        let namesOfTypes: string[] = [];
        for(let atributeName of this.getAtributesNames()) {
            namesOfTypes.push(this.getNameType(this[atributeName]));
        }
        return namesOfTypes;
    }

    // public getNamesOfParents<T>(obj: T): string[] {
    //     let className: string;
    //     let classNames: string[] = [];
    //     do {
    //         className = this.getNameType(obj);
    //         classNames.push(className);
    //         obj = Object.getPrototypeOf(obj);
    //     } while((className) !== "Object")

    //     return classNames;
    // }

    // Подбор компонента для "типа"
    public getComponentNameOfType(): string {
        let nameComponent: string;
        for(let parentName of this.parent) {
            nameComponent = DICTIONARY.findComponent(parentName);
            if (nameComponent != null) {
                return nameComponent;
            }
        }
        return 'default';
        
    }
}
