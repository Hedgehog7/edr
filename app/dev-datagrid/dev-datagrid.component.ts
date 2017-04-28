import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Customer, Service } from './app.service';

@Component({
    moduleId: module.id,
    selector: 'demo-app',
    templateUrl: 'dev-datagrid.component.html',
    providers: [Service]
})
export class DevDataGrid {
    customers: Customer[];

    constructor(service: Service) {
        this.customers =  service.getCustomers();
    }
}