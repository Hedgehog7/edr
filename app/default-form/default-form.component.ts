import { STUDENTS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { SOMEPERSONS } from '../data/data-test';
import { incrId } from '../data/id-incr';
import { DataService } from '../services/data.service';
import { Column } from '../data/column'; 

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
    // столбцы для атрибутов-коллекций
    columnTabs: {[nameColumn: string] : Column[]} = {};
    //
    valueTabs: {[nameColumn: string] : any[]} = {};

    popupVisible = false;
    currentEntity: EntityType = new EntityType();

    ngOnInit(){
        // получить список аттрибутов-коллекций
        this.arrAtributesCollection = this.entity.getArrayAtribute();
        // console.log(this.entity);
        
        // для кажого атрибута-коллекции определяем его набор столбцов
        // в соответствии с типом
        for(let attr of this.arrAtributesCollection) {
            
            if(this.entity[attr].length != 0) {
                let type = this.entity.getNameType(this.entity[attr][0]);
                if(type == ("Number" || "String" || "Boolean")) {
                    this.columnTabs[attr] = [new Column ("Value", type)];
                    let arr: any[] = [];
                    for(let elem of this.entity[attr])
                        arr.push({"Value": elem});
                    this.valueTabs[attr] = arr;
                } else {
                    // массив имен колонок
                    let arr = Object.getOwnPropertyNames(this.entity[attr][0]);
                    // массив объектов колонок
                    let m: Column[] = [];
                    for(let el of arr) 
                        m.push(new Column(el, this.entity.getNameType(this.entity[attr][0][el])));
                    this.columnTabs[attr] = m;
                    this.valueTabs[attr] = this.entity[attr];
                }
            } else {
                // let arr = Object.getOwnPropertyNames(this.entity[attr]);
                // console.log(Object.getOwnPropertyNames(this.entity[attr]));
                // let m: Column[] = [];
                // for(let el of arr) 
                //     m.push(new Column(el,this.entity.getNameType(this.entity[attr][0][el])));
                // this.columnTabs[attr] = m;
                this.valueTabs[attr] = this.entity[attr];
            }           
        }
    }

    /* НЕ ИСПОЛЬЗУЕТСЯ */
    // getColumnTabs(tab: string) {
        // if(this.entity.getNameType(this.entity[tab][0]) == ("Number" || "String" || "Boolean")) {
        //     var values = [{}];
        //     for(let elem of this.entity[tab]){
        //         // values.push({"Value" : elem});
        //     }
        //     console.log(values);
        //     return values;
        // } else
            // return this.entity[tab];
    // }

    showInfo(entityEx: EntityType) {
        // console.log(entityEx);
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }

    testMethod(e: any, data: any) {
        // console.log(data);
        // console.log(data.value);
        // console.log(e);
    }

    /* НЕ ИИСПОЛЬЗУЕТСЯ */
    // getColumnForTab(tab: string): string[] {
    //     return Object.getOwnPropertyNames(this.entity[tab][0]);
    // }

    // submit(form: NgForm){
    //     var x = form.value;
    //     let i: number = 0;
    //     for(let atribute of this.entity.getAtributesNames()) {
    //         // console.log(x['atribute'+ (i)]);
    //         this.entity[atribute] = x['atribute'+ (i++)];
    //     }
    // }

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
        console.log(this.entity);
        console.log(e);
        notify({
            message: "You have submitted the form",
            position: {
                my: "center top",
                at: "center top"
            }
        }, "success", 3000);
        
        e.preventDefault();
        console.log(this.entity);
    }
    // НЕ ИСПОЛЬЗУЕТСЯ
    //****************/
    // openTab(id: string) {
    //     var tab = document.getElementById(id);
    //     // console.log(tab);
    //     tab.style.display = tab.style.display == "block" ? "none": "block";
    // }

    getLengthNamesAttrEntity(): number {
        return this.entity.getAtributesNames().length;
    }

}