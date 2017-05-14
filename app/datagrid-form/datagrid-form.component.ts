import { Component, Input, OnInit } from '@angular/core';
import { Column } from '../data/all-test-data';
import { EntityType } from '../test/entity'; 

@Component({
    moduleId: module.id,
    selector: 'datagrid-custom',
    templateUrl: 'datagrid-form.component.html',
    styleUrls: ['datagrid-form.component.css']
})
export class DatagridComponent implements OnInit{
    @Input() dataCollection: any[];
    @Input() editMode: boolean;
    columnTabs: Column[] = [];
    valueTabs: any[] = [];
    entity: EntityType = new EntityType();
    popupVisible = false;
    currentEntity: any;

    ngOnInit() {
        if(this.dataCollection.length == 0)
            console.log(this.dataCollection);
        if(this.dataCollection.length != 0) {
            let type = this.entity.getNameType(this.dataCollection[0]);
            if(type == ("Number" || "String" || "Boolean")) {
                this.columnTabs = [new Column ("Value", type)];
                let arr: any[] = [];
                for(let elem of this.dataCollection)
                    arr.push({"Value": elem});
                this.valueTabs = arr;
            } else {
                // массив имен колонок
                let arr = Object.getOwnPropertyNames(this.dataCollection[0]);
                // массив объектов колонок
                let m: Column[] = [];
                for(let el of arr)
                    if(this.entity.getEntityNamesAttr().indexOf(el)==-1)
                        m.push(new Column(el, this.entity.getNameType(this.dataCollection[0][el])));
                this.columnTabs = m;
                this.valueTabs = this.dataCollection;
            }
        } else {
            this.valueTabs = this.dataCollection;
        } 
    }

    showInfo(entityEx: EntityType) {
        this.currentEntity = entityEx;
        this.popupVisible = true;
    }
}