import {Component, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'navbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Output() logout = new EventEmitter();
}
