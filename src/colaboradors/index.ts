import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColaboradorsPageContainer } from './containers/colaboradors-page/colaboradors-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule],
    declarations: [ColaboradorsPageContainer],
    exports: [ColaboradorsPageContainer],
    providers: []
})
export class ColaboradorsModule {
}
