import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export var config:string = 'http://172.20.10.2:5000/';

platformBrowserDynamic().bootstrapModule(AppModule);
