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