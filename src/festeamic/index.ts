import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FesteamicPageContainer } from './containers/festeamic-page/festeamic-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule, ReactiveFormsModule],
    declarations: [FesteamicPageContainer],
    exports: [FesteamicPageContainer],
    providers: []
})
export class FesteamicModule {
}
