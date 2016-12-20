import {Injectable} from '@angular/core';
import {ApplicationState} from '../statemanagement/state/ApplicationState';
import {Store} from '@ngrx/store';

@Injectable()
export class AppSandbox {
    isBusy$ = this.store.select(state => state.containers.application.isBusy);

    constructor(private store: Store<ApplicationState>) {
    }
}
