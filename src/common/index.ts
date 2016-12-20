import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DefaultPageComponent } from './components/default-page/default-page.component';
import { MainComponent } from './components/main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { FormGroupContent } from './components/form/form-group-content/form-group-content.component';
// import { FormGroupFooter } from './components/form/form-group-footer/form-group-footer.component';
// import { FormGroupPassword } from './components/form/form-group-password/form-group-password.component';
// import { FormGroupTextarea } from './components/form/form-group-textarea/form-group-textarea.component';
// import { FormGroupTextbox } from './components/form/form-group-textbox/form-group-textbox.component';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterModule, HttpModule],
    declarations: [
        DefaultPageComponent, MainComponent, NavbarComponent
    ],
    exports: [
        DefaultPageComponent, MainComponent, NavbarComponent
    ],
    providers: [ ]
})
export class CommonLogicModule {
}
