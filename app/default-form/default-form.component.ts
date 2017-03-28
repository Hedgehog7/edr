import { STUDENTS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { SOMEPERSONS } from '../data/data-test';

@Component({
    moduleId: module.id,
    selector: 'default-form',
    templateUrl: 'default-form.component.html',
    styleUrls: ['default-form.component.css']
})
export class DefaultFormComponent {
    @Input() entity: EntityType;
    @Input() editMode: boolean = false;

    submit(form: NgForm){
        // console.log(form['atribute0']);
        var x = form.value;
        // console.log(x['atribute0']);
        // console.log(form.controls);
        // console.log(form.valueChanges);
        // this.entity = form.value[0];
        let i: number = 0;
        for(let atribute of this.entity.getAtributesNames()) {
            // console.log(x['atribute'+ (i)]);
            this.entity[atribute] = x['atribute'+ (i++)];
        }
    }

    saveEntity(model: EntityType, valid: boolean) {

    }
}