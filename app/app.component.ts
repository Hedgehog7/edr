import { Component } from '@angular/core';

// @Component() предоставляет фреймворку информацию о компоненте 
@Component({
    // необходим для возможности указания расположения
    // html css файлов отностительно модуля
    moduleId: module.id,
    // указывает на название тэга который укажим в html
    selector: 'app',
    // указываем расположение самого html (файл или шаблонная строка)
    templateUrl: 'app.component.html',
    // указываем расположение стилей
    styleUrls: ['app.component.css']
})
export class AppComponent {
    // свойство класса
    title: string = 'Angular';
}