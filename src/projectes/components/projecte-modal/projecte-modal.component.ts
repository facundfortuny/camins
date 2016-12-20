import {Component, Input} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'projecte-modal-component',
  templateUrl: './projecte-modal.component.html'
})
export class ProjecteModalComponent {
  @Input() project: any;

  constructor(public activeModal: NgbActiveModal) {}
}

