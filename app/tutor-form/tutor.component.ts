import { Tutor } from '../data/tutor';
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