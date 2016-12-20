import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'festeamic-page',
    templateUrl: './festeamic.component.html'
})
export class FesteamicPageContainer {
    public festeAmicForm: FormGroup;

    constructor(
        private formatBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.festeAmicForm = this.formatBuilder.group({
            nom: ['', Validators.required],
            dni: ['', Validators.required],
            email: ['', Validators.required],
            direccio: ['', Validators.required],
            cp: ['', Validators.required],
            poblacio: ['', Validators.required],
            provincia: ['', Validators.required],
            telefon: ['', Validators.required],
            data: [, Validators.required],
            compte: ['', Validators.required],
            comentaris: ''
        });
    }

    onSubmit(value: string): void {
       console.log('you submitted value: ', value);
    }
}
