import { STUDENTS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { SOMEPERSONS } from '../data/data-test';
import { incrId } from '../data/id-incr';
import { DataService } from '../services/data.service';

@Component({
    moduleId: module.id,
    selector: 'default-form',
    templateUrl: 'default-form.component.html',
    styleUrls: ['default-form.component.css']
})
export class DefaultFormComponent implements OnInit{
    constructor(private dataService: DataService) {}
    @Input() entity: EntityType;
    // entity: EntityType = this.dataService.getStudent();
    @Input() editMode: boolean = false;
    // @Input() tabsCollection: string[] = [];
    idObj: string = incrId().toString();

    // атрибуты-коллекции для entity
    arrAtributesCollection: string[] = [];
    // столбцы для атрибутов-коллекций
    columnTabs: {[nameColumn: string] : string[]} = {};
    // 
    valueTabs: {[nameColumn: string] : any[]} = {};

    popupVisible = false;
    currentEntity: EntityType = new EntityType();

    ngOnInit(){
        // получить список аттрибутов-коллекций
        this.arrAtributesCollection = this.entity.getArrayAtribute();
        
        // для кажого атрибута-коллекции определяем его набор столбцов
        // в соответствии с типом
        for(let attr of this.arrAtributesCollection) {
            // console.log(this.entity[attr]);
            // console.log(Object.getOwnPropertyNames(this.entity[attr][0]));
            if(this.entity.getNameType(this.entity[attr][0]) == ("Number" || "String" || "Boolean")) {
                this.columnTabs[attr] = ["Value"];
                let arr: any[] = [];
                for(let elem of this.entity[attr])
                    arr.push({"Value": elem});
                this.valueTabs[attr] = arr;
                // console.log(arr);
            } else {
                this.columnTabs[attr] = Object.getOwnPropertyNames(this.entity[attr][0]);
                this.valueTabs[attr] = this.entity[attr];
            }
        }
    }

    getColumnTabs(tab: string) {
        // if(this.entity.getNameType(this.entity[tab][0]) == ("Number" || "String" || "Boolean")) {
        //     var values = [{}];
        //     for(let elem of this.entity[tab]){
        //         // values.push({"Value" : elem});
        //     }
        //     console.log(values);
        //     return values;
        // } else
            return this.entity[tab];
    }

    showInfo(entityEx: EntityType) {
        console.log(entityEx);
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }

    getColumnForTab(tab: string): string[] {
        return Object.getOwnPropertyNames(this.entity[tab][0]);
    }

    submit(form: NgForm){
        var x = form.value;
        let i: number = 0;
        for(let atribute of this.entity.getAtributesNames()) {
            // console.log(x['atribute'+ (i)]);
            this.entity[atribute] = x['atribute'+ (i++)];
        }
    }

    selectTab(e: any) {
        // console.log(e);
        // console.log(this.idObj + 'gridContainer' + e.itemData);
        var tab = document.getElementById(this.idObj + 'gridContainer' + e.itemData);
        if(tab.style.display == "block")
            tab.style.display = "none";
        else {
            for(let arr of this.arrAtributesCollection){
                document.getElementById(this.idObj + 'gridContainer' + arr).style.display = "none";
            }
            tab.style.display = "block";
        }
    }

    openTab(id: string) {
        var tab = document.getElementById(id);
        // console.log(tab);
        tab.style.display = tab.style.display == "block" ? "none": "block";
    }

    getLengthNamesAttrEntity(): number {
        return this.entity.getAtributesNames().length;
    }

}