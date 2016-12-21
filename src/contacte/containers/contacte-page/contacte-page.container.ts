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

    constructor(
        private formatBuilder: FormBuilder,
        private http: Http
    ) {
        this.initForm();
    }

    initForm () {
        this.contacteForm = this.formatBuilder.group({
            nom: ['', Validators.required],
            email: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
        this.nom = this.contacteForm.controls['nom'];
        this.email = this.contacteForm.controls['email'];
        this.subject = this.contacteForm.controls['subject'];
        this.message = this.contacteForm.controls['message'];
    }

    resetForm() {
      this.initForm();
    }

    onSubmit(value: string): void {
       console.log('you submitted value: ', value);

       let headers = new Headers({ 'Content-Type': 'application/json' }),
           options = new RequestOptions({ headers: headers });

       this.http.post('/contact', value, options).subscribe(res => {
           console.log('res:', res);
           this.resetForm();
       });
    }
}
