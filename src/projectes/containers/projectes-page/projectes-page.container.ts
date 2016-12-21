import { Component } from '@angular/core';

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
