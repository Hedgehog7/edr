/*
    '@angular/core' - название пакета из npm
*/
import { NgModule } from '@angular/core';
/*
    BrowserModule - модуль необходимый для работы в браузере,
    этот модуль браузера будет импортирован модулю приложения
*/
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/**
 * импорт компонента в основной модуль
 */
import { AppComponent } from './app.component';
import { PersonComponent } from './person-form/person.component';
import { StudentComponent } from './student-form/student.component';
import { DefaultFormComponent } from './default-form/default-form.component';
import { ResolverComponent } from './resolver/resolver.component';
import { TestTabsComponent } from './test-form/test-form.component';
import { ListStudentComponent } from './student-list/student-list.component';
import { PersonListComponent } from './person-list/person-list.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { UniversalListComponent } from './universal-list/universal-list.compnent';
import { TutorComponent } from './tutor-form/tutor.component';
import { TestSimpleType } from './test-c/test-c.component';

import { DataService } from './services/data.service';

import { NglModule } from 'ng-lightning/ng-lightning';

import { DemoDatatables } from './datatable/datatable.component';

import { DxDataGridModule } from 'devextreme-angular';

import { DevDataGrid } from './dev-datagrid/dev-datagrid.component';
/* 
    @NgModule() - декоратор указывающий, что это основной модуль приложения
    p.s.: Добавление метаинформации
    Декоратор импортируется из пакета npm
    Декоратор - это функция принимающая объект
*/
@NgModule({
/*
    imports указывется, что модуль импоритрует
*/
    imports: [BrowserModule, FormsModule, NglModule.forRoot(), DxDataGridModule],
    /**
     * Регистрируем компонент в основном модуле
     */
    declarations: [
        AppComponent,
        ResolverComponent,
        DefaultFormComponent,        
        PersonListComponent,
        PersonComponent,
        StudentComponent,
        TestTabsComponent,
        ListStudentComponent,
        DictionaryComponent,
        UniversalListComponent,
        TutorComponent,
        TestSimpleType,
        DemoDatatables,
        DevDataGrid
    ],
    providers: [DataService],
    /**
     * Сообщаем приложению, что для запуска приложения
     *  используется компонент AppComponent
     */
    bootstrap: [AppComponent]
})
/*
    export - указывает, что его можно импортировать в другой файл
*/
export class AppModule {
    
}