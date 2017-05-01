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

    ngOnInit(){
        this.arrAtributesCollection = this.entity.getArrayAtribute();
        for(let attr of this.arrAtributesCollection) {
            for(let propColl of this.entity[attr]) {
                // console.log(propColl);
                // console.log(Object.getOwnPropertyNames(propColl));
                this.columnTabs[attr] = Object.getOwnPropertyNames(propColl);
            }
        }
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
        console.log(e);
        console.log(this.idObj + 'gridContainer' + e.itemData);
        var tab = document.getElementById(this.idObj + 'gridContainer' + e.itemData);
        for(let arr of this.arrAtributesCollection){
            document.getElementById(this.idObj + 'gridContainer' + arr).style.display = "none";
        }
        tab.style.display = tab.style.display == "block" ? "none": "block";
    }

    openTab(id: string) {
        var tab = document.getElementById(id);
        console.log(tab);
        tab.style.display = tab.style.display == "block" ? "none": "block";
    }

    getLengthNamesAttrEntity(): number {
        return this.entity.getAtributesNames().length;
    }

}