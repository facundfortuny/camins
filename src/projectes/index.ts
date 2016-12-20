import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectesPageContainer } from './containers/projectes-page/projectes-page.container';
import { CommonLogicModule } from '../common/index';
import { ProjecteComponent } from './components/projecte/projecte.component';
import { ProjecteModalComponent } from './components/projecte-modal/projecte-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule, NgbModule.forRoot()],
    declarations: [ProjectesPageContainer, ProjecteComponent, ProjecteModalComponent],
    exports: [ProjectesPageContainer, ProjecteComponent, ProjecteModalComponent],
    entryComponents: [ProjecteModalComponent],
    providers: []
})
export class ProjectesModule {
}
