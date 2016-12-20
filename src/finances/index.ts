import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancesPageContainer } from './containers/finances-page/finances-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule],
    declarations: [FinancesPageContainer],
    exports: [FinancesPageContainer],
    providers: []
})
export class FinancesModule {
}
