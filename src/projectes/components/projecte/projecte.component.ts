import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjecteModalComponent } from '../projecte-modal/projecte-modal.component';

@Component({
    selector: 'projecte',
    templateUrl: './projecte.component.html'
})

export class ProjecteComponent {
    @Input() project: any;

    constructor(private modalService: NgbModal) {}

    open() {
      const modalRef = this.modalService.open(ProjecteModalComponent);
      modalRef.componentInstance.project = this.project;
    }
}
