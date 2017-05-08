import { Atribute } from './atribute';
import { RealationShip } from './realationship';
import { DICTIONARY } from '../data/data-test';

export class EntityType {

    private _nameEntity: string;
    private _parent: string[];
    private _atributes: Atribute[] = [];

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

    public getMainAttr(): string[] {
        let obj = this;
        let attrNames: string[] = [];
        let typeName: string;
        do {
            typeName = this.getNameType(obj);
            obj = Object.getPrototypeOf(obj);
            for(let attr of obj.atributes) {
                console.log(attr);
            }
        } while ((typeName) !== "Object")
        return attrNames;
    }

    get atributes(): Atribute[] {
        // let tempStrAtributes: string[] = Object.getOwnPropertyNames(this);
        let tempListAtributes: Atribute[] = [];        
        
        for(let nameAtribute of Object.getOwnPropertyNames(this)) {
            tempListAtributes
                .push(new Atribute(nameAtribute,
                        this.getNameType(Object.getOwnPropertyDescriptor(this, nameAtribute).value)));
        }
        this._atributes = tempListAtributes;
        return tempListAtributes;
    }

    public getNameType(obj: any): string {
        // console.log("name type, fuck!");
        // if(Object.getPrototypeOf(obj).constructor !==)
        if(obj == null) {
            return 'null or undefined';
        } else {
            return Object.getPrototypeOf(obj).constructor.name;
        }
    }

    public getAtributesNames(): string[] {
        // console.log('attrNames fuck!');
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

    public getArrayAtribute(): string[] {
        let arr: string[] = [];
        for(let atribute of this.getAtributesNames()) {
            if(this.getNameType(this[atribute]) == 'Array' && atribute != ('_atributes'||'atributes'))
                arr.push(atribute);
        }
        return arr;
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
