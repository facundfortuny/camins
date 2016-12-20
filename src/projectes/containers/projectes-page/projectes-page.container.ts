import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ViewChild, Component, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'projectes-page',
    templateUrl: './projectes.component.html'
})
export class ProjectesPageContainer {
    public projects;
    public arrayProjects: Array<Object>;
    constructor() {
        this.projects = require('./projects.json');
        this.arrayProjects = [];
        for (var key in this.projects) {
            if (this.projects.hasOwnProperty(key)) {
                let element = this.projects[key],
                    project = {
                        country: key,
                        list: element
                    };
                this.arrayProjects.push(project);
            }
        }
    }

}
