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