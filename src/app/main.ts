import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export var config:string = 'http://192.168.43.75:5000/';

platformBrowserDynamic().bootstrapModule(AppModule);
