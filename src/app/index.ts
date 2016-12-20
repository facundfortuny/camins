import {routing} from './routes';
import {BrowserModule} from '@angular/platform-browser';
import {ApplicationContainer} from './containers/application/application.container';
import {NgModule} from '@angular/core';
import {AppSandbox} from './app.sandbox';
import {Store} from '@ngrx/store';
import {CommonLogicModule} from '../common';
import {PresentacioModule} from '../presentacio';
import {ProjectesModule} from '../projectes';
import {FinancesModule} from '../finances';
import {ContacteModule} from '../contacte';
import {AgraimentsModule} from '../agraiments';
import {FesteamicModule} from '../festeamic';
import {ColaboradorsModule} from '../colaboradors';
import {XHRBackend, RequestOptions, Http} from '@angular/http';
import {customHttpFactory} from './customHttp';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/operator/finally';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/fromPromise';
import 'bootstrap';
@NgModule({
    imports: [
        BrowserModule, CommonLogicModule, routing, PresentacioModule, ProjectesModule, FinancesModule, FesteamicModule,
        AgraimentsModule, ContacteModule, ColaboradorsModule
    ],
    declarations: [ApplicationContainer],
    exports: [ApplicationContainer],
    providers: [
        AppSandbox,
        {
            provide: Http,
            useFactory: customHttpFactory,
            deps: [XHRBackend, RequestOptions, Store]
        }
    ]
})
export class AppModule {
}
