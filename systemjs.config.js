(function (global) {
    System.config({
        paths: {
            'npm:': 'node_modules/',
            'tether': 'node_modules/tether/dist/js/tether.min.js'
        },
        map: {
            app: 'app',

            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            
            'components': '../jqwidgets-ts/',

            'reflect-metadata': 'npm:reflect-metadata/Reflect.js',
            'rxjs': 'npm:rxjs',
            'ng-lightning/ng-lightning': 'https://unpkg.com/ng-lightning@1.3.0/bundles/ng-lightning.umd.js'
        },
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);