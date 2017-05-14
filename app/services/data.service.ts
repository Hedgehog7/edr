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