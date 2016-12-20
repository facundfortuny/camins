import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgraimentsPageContainer } from './containers/agraiments-page/agraiments-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule],
    declarations: [AgraimentsPageContainer],
    exports: [AgraimentsPageContainer],
    providers: []
})
export class AgraimentsModule {
}
