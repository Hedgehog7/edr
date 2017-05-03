import { STUDENTS } from '../data/data-test';
import { EntityType } from '../test/entity';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { SOMEPERSONS } from '../data/data-test';
import { incrId } from '../data/id-incr';
import { DataService } from '../services/data.service';
import { Column } from '../data/column'; 

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
    columnTabs: {[nameColumn: string] : Column[]} = {};
    // 
    valueTabs: {[nameColumn: string] : any[]} = {};

    popupVisible = false;
    currentEntity: EntityType = new EntityType();

    ngOnInit(){
        // получить список аттрибутов-коллекций
        this.arrAtributesCollection = this.entity.getArrayAtribute();
        
        // для кажого атрибута-коллекции определяем его набор столбцов
        // в соответствии с типом
        // console.log(this.arrAtributesCollection);
        
        for(let attr of this.arrAtributesCollection) {
            // console.log(this.entity[attr]);
            // console.log(Object.getOwnPropertyNames(this.entity[attr][0]));
            // console.log(this.entity[attr]);
            // console.log(this.entity[attr][0]);
            
            
            let type = this.entity.getNameType(this.entity[attr][0]);
            if(type == ("Number" || "String" || "Boolean")) {
                this.columnTabs[attr] = [new Column ("Value", type)];
                let arr: any[] = [];
                for(let elem of this.entity[attr])
                    arr.push({"Value": elem});
                this.valueTabs[attr] = arr;
                // console.log(this.columnTabs[attr]);
                // console.log(arr);
            } else {
                // массив имен колонок
                let arr = Object.getOwnPropertyNames(this.entity[attr][0]);
                // console.log(this.entity);
                // console.log(this.entity[attr]);
                // console.log(this.entity[attr][0]);
                // console.log(this.entity[attr][0][0]);
                
                // массив объектов колонок
                let m: Column[] = [];
                for(let el of arr) {
                    // console.log(this.entity[attr][0][el]);
                    // console.log(this.entity.getNameType(this.entity[attr][0][el]));
                    m.push(new Column(el,this.entity.getNameType(this.entity[attr][0][el])));
                }
                this.columnTabs[attr] = m;
                this.valueTabs[attr] = this.entity[attr];
                
                
            }
            // console.log(this.columnTabs[attr]);
            
        }
        // console.log(this.idObj);
        // console.log(this.valueTabs);
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
        // console.log(entityEx);
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }

    testMethod(e: any, data: any) {
        // console.log(data);
        console.log(data.value);
        // console.log(e);
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