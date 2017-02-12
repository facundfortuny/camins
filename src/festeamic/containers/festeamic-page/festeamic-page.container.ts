import { Component } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'festeamic-page',
    templateUrl: './festeamic.component.html'
})
export class FesteamicPageContainer {
    public festeAmicForm: FormGroup;
    error: Boolean;
    enviat: Boolean;

    constructor(
        private formatBuilder: FormBuilder,
        private http: Http
    ) {
        this.initForm();
        this.error = false;
        this.enviat = false;
    }

    initForm() {
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
            comentaris: '',
            fake: ''
        });
    }

    resetForm() {
        this.initForm();
    }

    onSubmit(value: string): void {
        let headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers: headers });

        this.http.post('/festamic', value, options).subscribe(res => {
            if (res['_body'] === 'Error') {
                this.enviat = false;
                this.error = true;
            } else {
                this.enviat = true;
                this.error = false;
                this.resetForm();
            }

            setTimeout(function () {
                this.enviat = false;
                this.error = false;
            }.bind(this), 3000);
        });
    }
}
