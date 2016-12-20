import {Component, Output, EventEmitter, Input, ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navbar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {
    @Output() logout = new EventEmitter();
}
