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
    // атрибуты-коллекции для entity
    arrAtributesCollection: string[] = [];
    popupVisible: boolean = false;
    currentEntity: any;

    ngOnInit(){
        this.arrAtributesCollection = this.entity.getArrayAtribute();
        // this.arrAtributesCollection = this.entity.getNewArrayAtribute();
        // this.entity.getNewArrayAtribute();
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