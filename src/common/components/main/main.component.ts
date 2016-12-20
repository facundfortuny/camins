import { Component } from '@angular/core';
@Component({
    selector: 'main',
    template: `
            <div class="container">
                <ng-content></ng-content>
            </div>
        `
})
export class MainComponent {
}
