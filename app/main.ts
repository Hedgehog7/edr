/**
 * Этот файл импортирует основной модуль приложения
 * и запускает его в браузере
 */

// импорт платформы на которой будет работать приложение
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// импорт основного модуля приложения
import { AppModule } from './app.module';

/*
    постоянная содержит экземпляр платформы,
    на которой будет работать приложение 
*/
const platform = platformBrowserDynamic();
// в платформу отправляем модуль приложения,
// после чего приложение запускается
platform.bootstrapModule(AppModule);