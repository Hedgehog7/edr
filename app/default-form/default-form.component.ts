import { STUDENTS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { SOMEPERSONS } from '../data/data-test';
import { incrId } from '../data/id-incr';

@Component({
    moduleId: module.id,
    selector: 'default-form',
    templateUrl: 'default-form.component.html',
    styleUrls: ['default-form.component.css']
})
export class DefaultFormComponent {
    @Input() entity: EntityType;
    @Input() editMode: boolean = false;
    idObj: string = incrId().toString();

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

    openTab(id: string) {
        // var alltabs = document.getElementsByClassName('entity_attr');
        // console.log('HI' + ' ' + id);
        // for(let i = 0; i < alltabs.length; i++) {
        //     alltabs[i].style.display = 'none';
        // }
        var tab = document.getElementById(id);
        console.log(tab);

        tab.style.display = tab.style.display == "block" ? "none": "block";
    }
}