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