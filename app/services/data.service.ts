import { Person } from '../data/persons';
import { Student } from '../data/students';
import { Tutor } from '../data/tutor';
import { EntityType } from '../test/entity';
import { STUDENTS, SOMEPERSONS, TUTORS, PERSONANDSTUDENT } from '../data/data-test';

export class DataService {
    
    persons: Person[] = SOMEPERSONS;
    students: Student[] = STUDENTS;
    tutors: Tutor[] = TUTORS;
    variousTypes: EntityType[] = PERSONANDSTUDENT;

    getStudents(): Student[] {
        return this.students;
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