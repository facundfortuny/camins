import { applicationReducer } from './reducers/containers/application.reducer';
import { combineReducers } from '@ngrx/store';

let dataReducers = combineReducers({
});
let containersReducers = combineReducers({
    application: applicationReducer
});
let productionReducer = combineReducers({
    data: dataReducers,
    containers: containersReducers
});

export function rootReducer(state: any, action: any) {
    return productionReducer(state, action);
}
