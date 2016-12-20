import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PresentacioPageContainer } from './containers/presentacio-page/presentacio-page.container';
import { CommonLogicModule } from '../common/index';

@NgModule({
    imports: [FormsModule, RouterModule, CommonModule, CommonLogicModule, HttpModule],
    declarations: [PresentacioPageContainer],
    exports: [PresentacioPageContainer],
    providers: []
})
export class PresentacioModule {
}
