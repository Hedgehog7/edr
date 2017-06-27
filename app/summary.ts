import { EntityType } from '../test/entity';
import { EntityList } from '../test/list-entity';

/**
 * Описание класса "колонка", вспомогательый класс
 */
export class Column {
    constructor(
        public name: string,
        public type: string) {
    }
}

export class Department {
    constructor(
        public nameDepartment: string,
        public number: number,
        public specialization: string) {

    }
}

export class Dictionary {
    records: RecordDictionary[] = [];

    getRecords(): RecordDictionary[] {
        return this.records;
    }

    findComponent(nameEntity: string): string {
        for(let record of this.records) {
            if(record.nameEntity == nameEntity) {
                return record.nameComponent;
            }
        }
        return null;
    }

    getNamesEntity(): string[] {
        let names: string[] = [];
        for(let record of this.records) {
            names.push(record.nameEntity);
        }
        return names;
    }

    pushNewRecord(record: RecordDictionary) {
        this.records.push(record);
    }
}

export class RecordDictionary {
    // nameEntity: string;
    // nameComponent: string;
    constructor(public nameEntity: string, 
                public nameComponent: string) {}
}

export class Discipline extends EntityType {
    constructor(
        public fullName: string,
        public shortName: string){
        super();
        this.updateNameEntity();
    }
}

export class Group extends EntityType {
    
    constructor(public name: string,
                public yearStart: number,
                public specialization: string){
        super();
        this.updateNameEntity();
    }
}

export class Olympiad extends EntityType {
    
    constructor(public name: string,
                public year: number,
                public result: string,
                public discipline: Discipline){
        super();
        this.updateNameEntity();
    }
}

export class Person extends EntityType {

    constructor(public name: string,
                public surname: string,
                public age: number) {
            super();
            this.updateNameEntity();       
    }
}

export class Student extends Person {
    
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public personalNumber: number,
                public numberDepartment: number,
                public studentGroup: Group,
                public age: number = 0,
                public disciplines: Discipline[],
                // public olympiads: EntityList<Olympiad>,
                public olympiads: Olympiad[],
                public something: number[]
                ){
        super(name, surname, age);
        // this.nameEntity = this.constructor.name;
        this.updateNameEntity();
        // console.log(Object.getPrototypeOf(this));
    }
}

export class Tutor extends Person {
    constructor(public name: string,
                public surname: string,
                public patronymic: string,
                public scienceDegree: string,
                public personalNumber: number,
                public workExperience: number,
                public age: number ) {
        super(name, surname, age);
        this.updateNameEntity();
    }
}

export class Citizen extends Person {
    constructor(public name: string,
                public surname: string,
                public age: number,
                public numPassport: number) {
        super('','', 20);
    }
}

/**
 * Тестовые данные
 */

export const DISCIPLINES: Discipline[] = [];
DISCIPLINES.push(new Discipline('Mathematical analysis','Math.an.'));
DISCIPLINES.push(new Discipline('Linear algebra','Lin.al.'));
DISCIPLINES.push(new Discipline('Physics','Physics'));


export const SOMETHING: number[] = [1,2,3,4,5,6];

export const OLYMPIADS: Array<Olympiad> = [];
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по физике', 2016, 'Победитель', new Discipline('Physics','Physics')));
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по физике', 2015, 'Участник', new Discipline('Physics','Physics')));
OLYMPIADS.push(new Olympiad('Межвузовская олимпиада по математике', 2015, 'Участник', new Discipline('Mathematical analysis','Math.an.')));
export const OLYMPIADS2:  Array<Olympiad> = [];
export const OLYMPIADS3: EntityList<Olympiad> = new EntityList<Olympiad>();
OLYMPIADS3.setValues(OLYMPIADS);

export const GROUPS: Group[] = [];
const testGroup: Group = new Group('Б13-507', 2012, 'Программная инженерия');
const testGroup2: Group = new Group('Б13-508', 2013, 'Прикладная математика');
GROUPS.push(new Group('Б13-507', 2012, 'Программная инжененрия'));

export const STUDENTS: Student[] = [];
STUDENTS.push(new Student('Petr','Petrov','Petrovich', 100000, 22, testGroup, 19, DISCIPLINES, OLYMPIADS, SOMETHING));
STUDENTS.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, testGroup2, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Victor','Victorov','Victorovich', 300000, 31, testGroup2, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Vladimir','Vladimirov','Vladimirovich', 400000, 44, testGroup, 20, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Denis','Denisov','Denisovic', 500000, 27, testGroup, 21, DISCIPLINES, OLYMPIADS,SOMETHING));
STUDENTS.push(new Student('Semen','Semenov','Semenovich', 600000, 32, testGroup2, 19, DISCIPLINES, OLYMPIADS,SOMETHING));

export const SOMEPERSONS: Person[] = [];
SOMEPERSONS.push(new Person('Bob','White', 23));
SOMEPERSONS.push(new Person('Tom','Black', 12));
SOMEPERSONS.push(new Person('Soyer','Red', 44));
SOMEPERSONS.push(new Person('Ron','Green', 45));
SOMEPERSONS.push(new Person('Nevil','Grey', 12));

export const TUTORS: Tutor[] = [];
TUTORS.push(new Tutor('Petr', 'Petrov', 'Petrovich', 'PhD', 123, 30, 50));
TUTORS.push(new Tutor('Ivan', 'Ivanov', 'Ivanovich', 'Bachelor', 456, 5, 27));
TUTORS.push(new Tutor('Semen', 'Semenov', 'Semenovich', 'Master', 789, 10, 50));
TUTORS.push(new Tutor('Victor', 'Victorov', 'Victorovich', 'PhD', 101, 35, 60));

export const PERSONANDSTUDENT: EntityType[] = [];
PERSONANDSTUDENT.push(new Person('John','Q',45));
PERSONANDSTUDENT.push(new Student('Semen','Semenov','Semenovich', 600000, 32, testGroup, 19, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Victor', 'Victorov', 'Victorovich', 'PhD', 101, 35, 60));
PERSONANDSTUDENT.push(new Person('Soyer','Red', 44));
PERSONANDSTUDENT.push(new Student('Victor','Victorov','Victorovich', 300000, 31, testGroup, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Semen', 'Semenov', 'Semenovich', 'Master', 789, 10, 50));
PERSONANDSTUDENT.push(new Person('Bob','White', 23));
PERSONANDSTUDENT.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, testGroup, 18, DISCIPLINES, OLYMPIADS,SOMETHING));
PERSONANDSTUDENT.push(new Tutor('Petr', 'Petrov', 'Petrovich', 'PhD', 123, 30, 50));


export const DICTIONARY: Dictionary = new Dictionary();
DICTIONARY.pushNewRecord(new RecordDictionary('Student','StudentComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Person','PersonComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Tutor','TutorComponent'));
// DICTIONARY.pushNewRecord(new RecordDictionary('EntityList','DatagridComponent'));


export class DictionaryCollections {
    records: RecordDictionaryColleactions[] = [];

    getRecords(): RecordDictionaryColleactions[] {
        return this.records;
    }

    findComponent(nameCollection: string, nameEntity: string): string {
        for(let record of this.records) {
            if(record.nameEntity == nameEntity && record.nameCollection == nameCollection) {
                return record.nameComponent;
            }
        }
        return 'default';
    }

    getNamesEntity(): string[] {
        let names: string[] = [];
        for(let record of this.records)
            names.push(record.nameEntity);
        return names;
    }

    pushNewRecord(record: RecordDictionaryColleactions) {
        this.records.push(record);
    }
}

export class RecordDictionaryColleactions {

    constructor(public nameCollection: string,
                public nameEntity: string, 
                public nameComponent: string) {}
}

export const DICTIONARYCOLL: DictionaryCollections = new DictionaryCollections();
DICTIONARYCOLL.pushNewRecord(new RecordDictionaryColleactions('Array','Student','StudentList'));
DICTIONARYCOLL.pushNewRecord(new RecordDictionaryColleactions('Array','Person','PersonList'));

let ID: number = 0;

export function incrId() {
    return ID++;
}
import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { EntityList } from '../test/list-entity'

@Component({
    moduleId: module.id,
    selector: 'datagrid-custom',
    templateUrl: 'datagrid-form.component.html',
    styleUrls: ['datagrid-form.component.css']
})
export class DatagridComponent implements OnInit{
    @Input() dataCollection: any[];
    @Input() editMode: boolean = false;
    columnTabs: Column[] = [];
    valueTabs: any[] = [];
    entity: EntityType = new EntityType();
    popupVisible = false;
    currentEntity: any;

    ngOnInit() {
        if(this.dataCollection.length == 0)
            console.log(this.dataCollection);
        if(this.dataCollection.length != 0) {
            let type = this.entity.getNameType(this.dataCollection[0]);
            if(type == ("Number" || "String" || "Boolean")) {
                this.columnTabs = [new Column ("Value", type)];
                let arr: any[] = [];
                for(let elem of this.dataCollection)
                    arr.push({"Value": elem});
                this.valueTabs = arr;
            } else {
                // массив имен колонок
                let arr = Object.getOwnPropertyNames(this.dataCollection[0]);
                // массив объектов колонок
                let m: Column[] = [];
                for(let el of arr)
                    if(this.entity.getEntityNamesAttr().indexOf(el)==-1)
                        m.push(new Column(el, this.entity.getNameType(this.dataCollection[0][el])));
                this.columnTabs = m;
                this.valueTabs = this.dataCollection;
            }
        } else {
            this.valueTabs = this.dataCollection;
        }
    }

    showInfo(entityEx: EntityType) {
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }
}
import { STUDENTS, incrId, Column } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../services/data.service';

import notify from 'devextreme/ui/notify';

@Component({
    moduleId: module.id,
    selector: 'default-form',
    templateUrl: 'default-form.component.html',
    styleUrls: ['default-form.component.css']
})
export class DefaultFormComponent implements OnInit{
    constructor(private dataService: DataService) {}
    @Input() entity: EntityType;
    @Input() editMode: boolean = false;
    idObj: string = incrId().toString();
    arrAtributesCollection: string[] = [];
    popupVisible: boolean = false;
    currentEntity: any;

    ngOnInit(){
        this.arrAtributesCollection = this.entity.getArrayAtribute();
    }

    showInfo(entityEx: EntityType) {
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }

    testMethod(e: any, data: any) {
        console.log(e);
    }

    selectTab(e: any, type: string) {
        let tab: any = document.getElementById(this.idObj + 'gridContainer' + type + e.itemData);
        if(tab.style.display == "block")
            tab.style.display = "none";
        else {
            for(let arr of this.arrAtributesCollection){
                document.getElementById(this.idObj + 'gridContainer' + type + arr).style.display = "none";
            }
            tab.style.display = "block";
        }
    }

    onFormSubmit (e: any) {
        notify({
            message: "You have submitted the form",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
    }

    getLengthNamesAttrEntity(): number {
        return this.entity.getAtributesNames().length;
    }

}
import { DICTIONARYCOLL, DICTIONARY, Dictionary, RecordDictionary, DictionaryCollections, RecordDictionaryColleactions } from '../data/all-test-data';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'dictionary',
    templateUrl: 'dictionary.component.html',
    styleUrls: ['dictionary.component.css']
})
export class DictionaryComponent {
    exampleDictionary: Dictionary = DICTIONARY;
    newRecord: RecordDictionary = new RecordDictionary('','');
    dictionaryColl: DictionaryCollections = DICTIONARYCOLL;

    delete (record: RecordDictionary) {
        let records: RecordDictionary[] = this.exampleDictionary.getRecords();
        records.splice(records.indexOf(record), 1);
    }

    deleteRecColl (record: RecordDictionaryColleactions) {
        let records: RecordDictionaryColleactions[] = this.dictionaryColl.getRecords();
        records.splice(records.indexOf(record), 1);
    }

    addNewRecord(record: RecordDictionary) {
        console.log((record.nameComponent != '') + ' && '
                     + (record.nameEntity != '') + ' : '
                     + record.nameComponent != '' && record.nameEntity != '');
        if(record.nameComponent != '' && record.nameEntity != '') {
            this.exampleDictionary.pushNewRecord(this.newRecord);
            this.newRecord = new RecordDictionary('','');
        }
    }
}
import { Group } from '../data/all-test-data';
import { Component, Input } from '@angular/core';


/**
 * ????????? ??????????? ????? ?? ??????? ??????????? ?????????
 */
@Component({
    moduleId: module.id,
    selector: 'group',
    templateUrl: 'group.component.html',
    styleUrls: ['group.component.css']
})
export class GroupComponent {
    @Input() group: Group;
}
import { DataService } from '../services/data.service';
import { SOMEPERSONS, Person } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'person',
    templateUrl: 'person.component.html',
    styleUrls: ['person.component.css']
})
export class PersonComponent {
    @Input() person: Person = SOMEPERSONS[0];
}
import { DataService } from '../services/data.service';
import { Component, Input } from '@angular/core';

import { Person, STUDENTS, SOMEPERSONS } from '../data/all-test-data';

@Component({
    moduleId: module.id,
    selector: 'person-list',
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {
    @Input() persons: Person[];
    // persons: Person[] = STUDENTS;    
    // constructor(private dataService: DataService) {}

    // ngOnInit() {
    //     this.persons = this.dataService.getPersons();
    // }
}
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'resolver',
    templateUrl: 'resolver.component.html',
    styleUrls: []
})
export class ResolverComponent {
    @Input() entity: EntityType;
    @Input() editMode: Boolean = false;
}
import { EntityType } from '../test/entity';
import { Component, Input, ElementRef } from '@angular/core';
import { DICTIONARYCOLL } from '../data/all-test-data';


/**
 * Компонент разрешающий какой из готовых компонентов применить
 */
@Component({
    moduleId: module.id,
    selector: 'resolver-collections',
    templateUrl: 'resolver-collections.component.html',
    styleUrls: []
})
export class ResolverComponentCollections {
    @Input() collection: any[] = [];
    @Input() editMode: Boolean = false;

    constructor(elem: ElementRef) {
        const tagName = elem.nativeElement.tagName.toLowerCase();
        console.log(tagName);
    }

    getNameComponent(): string {
        let typeCollection: string = Object.getPrototypeOf(this.collection).constructor.name;
        let typeObjects: EntityType = this.collection[0];
        let result: string = "default";
        if(typeObjects != null)
            for(let parentName of typeObjects.parents) {
                result = DICTIONARYCOLL.findComponent(typeCollection,parentName);
                if(result != "default")
                    break;
            }
        return result;
    }
}
import { Person, Student, Tutor, STUDENTS, SOMEPERSONS, TUTORS, PERSONANDSTUDENT } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    
    persons: Person[] = SOMEPERSONS;
    students: Student[] = STUDENTS;
    tutors: Tutor[] = TUTORS;
    variousTypes: EntityType[] = PERSONANDSTUDENT;

    getStudents(): Student[] {
        return this.students;
    }

    getStudent(): Student {
        return this.students[0];
    }

    getPersons(): Person[] {
        return this.persons;
    }

    getTutors(): Tutor[] {
        return this.tutors;
    }

    getVariousTypes(): EntityType[] {
        return this.variousTypes;
    }

    addNewStudent(student: Student) {
        this.students.push(student);
    }
}
import { STUDENTS, Student } from '../data/all-test-data';
import { Component, Input, OnInit } from '@angular/core';
import { PersonComponent } from '../person-form/person.component';
import { DataService } from '../services/data.service';

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
    styleUrls: ['student.component.css']
})
export class StudentComponent {
    @Input() student: Student;
    @Input() editMode: boolean = false;

    constructor(private dataService: DataService) {}

    addNewStudent() {
        this.dataService.addNewStudent(this.student);
        this.student = new Student(null,null,null,null,null,null, null, null, null, null);
    }
}
import { DataService } from '../services/data.service';
import { Student, STUDENTS, Group, Olympiad } from '../data/all-test-data';
import { Component, Input } from '@angular/core';
import { EntityList } from '../test/list-entity';


@Component({
    moduleId: module.id,
    selector: 'student-list',
    templateUrl: 'student-list.component.html',
    styleUrls: ['student-list.component.css']
})
export class ListStudentComponent{
    @Input() students: Student[];
    newStudent : Student;

    constructor(private dataService: DataService) {}

    ngOnInit() {
        this.newStudent = new Student('','','', 0, 0, new Group('', 0,''), 0,[], [],[]);
    }

    updateNewStudent() {
        // this.newStudent = new Student('','','', 0, 0, new Group('', 0,''), 0,[],new EntityList<Olympiad>(),[]);
        this.newStudent = new Student(null,null,null,null,null,null,null, null, null, null);
    }

    delete(student: Student) {
        let index = STUDENTS.indexOf(student);
        if(index > -1) {
            STUDENTS.splice(index, 1);
        }
    }

    closePopup(id: string){
        var popup = document.getElementById("popup2");
        popup.style.display = "none";
        popup.style.top = "-100%";
        popup.style.left = "50%";
        var overlay2 = document.getElementById("win2");        
        overlay2.style.display = "none";
        var newStudy = document.getElementById("add-new");
        newStudy.style.display = 'none';
        for(let student of this.students) {
            let el = document.getElementById('' + student.personalNumber);
            el.style.display = "none";
            el = document.getElementById('edit' + student.personalNumber);
            el.style.display = "none";
        }
    }

    viewdiv(id: string, obj: any) {
        // console.log(obj);
        var el = document.getElementById(id);
        var popup = document.getElementById("popup2");
        var overlay2 = document.getElementById("win2");
        var newStudent = document.getElementById("win2");
        if(popup.style.display = "none") {
            popup.style.display = "block";
            overlay2.style.display = "block";
            popup.style.top = "10%";
            popup.style.left = "25%";
        } else {
            popup.style.display = "none";
            popup.style.top = "-100%";
            popup.style.left = "50%";
            overlay2.style.display = "none";
        }
        
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }

    // addNewStudent () {
    //     let isEmptyProperty: boolean = false; 
    //     for(let str of this.newStudent.getAtributesNames()) {
    //         // console.log('Atr name: ' + str);
    //         // console.log('Value: ' + this.newStudent[str]);
    //         // console.log('Result: ' + (this.newStudent[str] =='') + '||' + (this.newStudent[str] == null));
    //         if(this.newStudent[str] =='' || this.newStudent[str] == null) {
    //             isEmptyProperty = true;
    //             break;
    //         }
    //     }
    //     if(!isEmptyProperty) {
    //         this.students.push(this.newStudent);
    //         this.newStudent = new Student('','','',null,null,'',null);
    //     }
    // }
}
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
        return this._typeAtribute;
    }
}
import { Atribute } from './atribute';
import { RealationShip } from './realationship';
import { EntityList } from './list-entity';
import { DICTIONARY } from '../data/all-test-data';

export class EntityType {
    
    private _nameEntity: string = '';
    private _parentsEntities: EntityType[] = [];
    private _atributes: Atribute[] = [];
    private _realathionShips: RealationShip[];

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
    public getNewArrayAtribute(): string[]{
        let arr: string[] = [];
        for(let atribute of this.getAtributesNames())
            if(this.getNameType(this[atribute]) == 'EntityList')
                arr.push(atribute);
        // console.log(arr);
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
import { EntityType } from './entity';
import { TypeRealationShip } from './typerelationship';
export class RealationShip {
    name: string;
    isOneToOne: boolean;
    isOneToMany: boolean;
    isManyToMany: boolean;
    typeShip: TypeRealationShip;
}
export const enum TypeRealationShip {
    isOneToOne,
    isOneToMany,
    isManyToMany
}
import { Tutor, Person, DICTIONARY, Student } from '../data/all-test-data';
import { EntityType } from '../test/entity';
import { EntityList } from '../test/list-entity';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
    moduleId: module.id,
    selector: 'test-tabs',
    templateUrl: 'test-form.component.html',
    styleUrls: ['test-form.component.css']
})
export class TestTabsComponent {
    students: Student[];
    persons: Person[];
    tutors: Tutor[];
    variousTypes: EntityType[];
    sd: EntityList<any>;
    constructor(private dataService: DataService) {
        this.persons = this.dataService.getPersons();
        this.students = this.dataService.getStudents();
        this.tutors = this.dataService.getTutors();
        this.variousTypes = this.dataService.getVariousTypes();
        this.sd = new EntityList<any>();
        this.sd.setValues(this.dataService.getStudents());
    }

    ngOnInit() {}
}
var json = 
{
    "type": "Person",
    "data": 
    {
        "name": "Ivan",
        "surname": "Zagoskin",
        "age": 21
    }
};
function deserialize(input: any) {
    let typeJson = input.type;
    let component: string = DICTIONARY.findComponent(typeJson);
    if(component=="PersonComponent") {
        return new Person(input.data.name, input.data.surname, input.data.age);
    } else if(component=="StudentComponent") {
        return new Person(input.data.name, input.data.surname, input.data.age);
    }
}
import { Tutor } from '../data/all-test-data';
import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'tutor',
    templateUrl: 'tutor.component.html',
    styleUrls: ['tutor.component.css']
})
export class TutorComponent {
    @Input() tutor: Tutor;
}
import { SOMEPERSONS, incrId } from '../data/all-test-data';
import { DataService } from '../services/data.service';
import { EntityType } from '../test/entity';
import { Component, Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'universal-list',
    templateUrl: 'universal-list.component.html',
    styleUrls: ['universal-list.component.css']
})
export class UniversalListComponent {
    @Input() entityArray: EntityType[];
    idList: string = incrId().toString();
    delete(entity: EntityType) {
        let index = this.entityArray.indexOf(entity);
        if(index > -1) {
            this.entityArray.splice(index, 1);
        }
    }
    closePopup(){
        var popup = document.getElementById('' + this.idList + 'popup2');
        popup.style.display = "none";
        popup.style.top = "-100%";
        popup.style.left = "50%";
        var overlay2 = document.getElementById('' + this.idList + 'win2');        
        overlay2.style.display = "none";
        for(let entity of this.entityArray) {
            let el = document.getElementById('' + this.idList + this.entityArray.indexOf(entity));
            el.style.display = "none";
            el = document.getElementById('edit' + this.idList + this.entityArray.indexOf(entity));
            el.style.display = "none";
        }
    }
    viewdiv(id: string, obj: any) {
        // console.log(obj);
        var el = document.getElementById(id);
        // console.log('' + this.idList + 'popup2');
        var popup = document.getElementById('' + this.idList + 'popup2');
        var overlay2 = document.getElementById('' + this.idList + 'win2');
        if(popup.style.display = "none") {
            popup.style.display = "block";
            overlay2.style.display = "block";
            popup.style.top = "10%";
            popup.style.left = "25%";
        } else {
            popup.style.display = "none";
            popup.style.top = "-100%";
            popup.style.left = "50%";
            overlay2.style.display = "none";
        }
        
        if (el.style.display == "block") {
            el.style.display = "none";
        } else {
            el.style.display = "block";
        }
    }
}
import { Component } from '@angular/core';
@Component({
    // необходим для возможности указания расположения
    // html css файлов отностительно модуля
    moduleId: module.id,
    // указывает на название тэга который укажим в html
    selector: 'app',
    // указываем расположение самого html (файл или шаблонная строка)
    templateUrl: 'app.component.html',
    // указываем расположение стилей
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = 'Angular';
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonComponent } from './person-form/person.component';
import { StudentComponent } from './student-form/student.component';
import { DefaultFormComponent } from './default-form/default-form.component';
import { ResolverComponent } from './resolver/resolver.component';
import { TestTabsComponent } from './test-form/test-form.component';
import { ListStudentComponent } from './student-list/student-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { UniversalListComponent } from './universal-list/universal-list.compnent';
import { TutorComponent } from './tutor-form/tutor.component';
import { DatagridComponent } from './datagrid-form/datagrid-form.component'
import { ResolverComponentCollections } from './resolver-collections/resolver-collections.component';
import { DataService } from './services/data.service';
import { DxPopupModule,
        DxButtonModule, 
        DxDataGridModule, 
        DxSelectBoxModule, 
        DxTabsModule, 
        DxTemplateModule, 
        DxTextBoxModule,
        DxValidatorModule,
        DxNumberBoxModule,
        DxCheckBoxModule,
        DxValidationSummaryModule,
        DxFormModule } from 'devextreme-angular';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        // NglModule.forRoot(), 
        DxDataGridModule, 
        DxSelectBoxModule, 
        DxTabsModule,
        DxPopupModule,
        DxButtonModule,
        DxTemplateModule,
        DxTextBoxModule,
        DxValidatorModule,
        DxNumberBoxModule,
        DxCheckBoxModule,
        DxValidationSummaryModule,
        DxFormModule
    ],
    declarations: [
        AppComponent,
        ResolverComponent,
        DefaultFormComponent,        
        PersonListComponent,
        PersonComponent,
        StudentComponent,
        TestTabsComponent,
        ListStudentComponent,
        DictionaryComponent,
        UniversalListComponent,
        TutorComponent,
        DatagridComponent,
        ResolverComponentCollections
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
    
}
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);