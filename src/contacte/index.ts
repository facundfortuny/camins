import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactePageContainer } from './containers/contacte-page/contacte-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule, ReactiveFormsModule],
    declarations: [ContactePageContainer],
    exports: [ContactePageContainer],
    providers: []
})
export class ContacteModule {
}
