import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { ROUTER_PROVIDERS} from '@angular/router-deprecated';

platformBrowserDynamic().bootstrapModule(AppModule, [ROUTER_PROVIDERS]);
