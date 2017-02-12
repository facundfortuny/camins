import { Http, Headers, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'contacte-page',
    templateUrl: './contacte.component.html'
})
export class ContactePageContainer {
    public contacteForm: FormGroup;
    nom: AbstractControl;
    email: AbstractControl;
    subject: AbstractControl;
    message: AbstractControl;
    fake: AbstractControl;
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
        this.contacteForm = this.formatBuilder.group({
            nom: ['', Validators.required],
            email: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required],
            fake: ''
        });
        this.nom = this.contacteForm.controls['nom'];
        this.email = this.contacteForm.controls['email'];
        this.subject = this.contacteForm.controls['subject'];
        this.message = this.contacteForm.controls['message'];
        this.fake = this.contacteForm.controls['fake'];
    }

    resetForm() {
        this.initForm();
    }

    onSubmit(value: string): void {
        let headers = new Headers({ 'Content-Type': 'application/json' }),
            options = new RequestOptions({ headers: headers });

        this.http.post('/contact', value, options).subscribe(res => {

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
