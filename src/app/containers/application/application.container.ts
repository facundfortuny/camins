import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { AppSandbox } from '../../app.sandbox';
import { Router } from '@angular/router';

@Component({
    selector: 'application',
    providers: [Title],
    templateUrl: './application-page.container.html'
})
export class ApplicationContainer {
    isBusy$ = this.sb.isBusy$;

    constructor(private title: Title, private sb: AppSandbox, private router: Router) {
        this.title.setTitle('Camins ONG');
    }
}
