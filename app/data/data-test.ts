import { Tutor } from './tutor';
import { EntityType } from '../test/entity';
import { Dictionary, RecordDictionary } from './dictionary';
import { Person } from '../data/persons';
import { Student } from '../data/students';
import { Group } from '..data/group';


export const GROUPS: Group[] = [];
GROUPS.push(new Group('Б13-507', 2012, 'Программная инжененрия'));

export const STUDENTS: Student[] = [];
STUDENTS.push(new Student('Petr','Petrov','Petrovich', 100000, 22, 'B13-508', 19));
STUDENTS.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, 'B13-508', 18));
STUDENTS.push(new Student('Victor','Victorov','Victorovich', 300000, 31, 'B13-508', 18));
STUDENTS.push(new Student('Vladimir','Vladimirov','Vladimirovich', 400000, 44, 'B13-508', 20));
STUDENTS.push(new Student('Denis','Denisov','Denisovic', 500000, 27, 'B13-508', 21));
STUDENTS.push(new Student('Semen','Semenov','Semenovich', 600000, 32, 'B13-508', 19));

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
PERSONANDSTUDENT.push(new Student('Semen','Semenov','Semenovich', 600000, 32, 'B13-508', 19));
PERSONANDSTUDENT.push(new Tutor('Victor', 'Victorov', 'Victorovich', 'PhD', 101, 35, 60));
PERSONANDSTUDENT.push(new Person('Soyer','Red', 44));
PERSONANDSTUDENT.push(new Student('Victor','Victorov','Victorovich', 300000, 31, 'B13-508', 18));
PERSONANDSTUDENT.push(new Tutor('Semen', 'Semenov', 'Semenovich', 'Master', 789, 10, 50));
PERSONANDSTUDENT.push(new Person('Bob','White', 23));
PERSONANDSTUDENT.push(new Student('Ivan','Ivanov','Ivanovich', 200000, 21, 'B13-508', 18));
PERSONANDSTUDENT.push(new Tutor('Petr', 'Petrov', 'Petrovich', 'PhD', 123, 30, 50));


export const DICTIONARY: Dictionary = new Dictionary();
DICTIONARY.pushNewRecord(new RecordDictionary('Student','StudentComponent'));
// DICTIONARY.pushNewRecord(new RecordDictionary('Student','PersonComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Person','PersonComponent'));
DICTIONARY.pushNewRecord(new RecordDictionary('Tutor','TutorComponent'));