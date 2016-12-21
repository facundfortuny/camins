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

    constructor(
        private formatBuilder: FormBuilder,
        private http: Http
    ) {
        this.contacteForm = this.formatBuilder.group({
            nom: ['', Validators.required],
            email: ['', Validators.compose([Validators.required])],
            message: ['', Validators.required]
        });
        this.nom = this.contacteForm.controls['nom'];
    }

    onSubmit(value: string): void {
       console.log('you submitted value: ', value);

       let headers = new Headers({ 'Content-Type': 'application/json' }),
           options = new RequestOptions({ headers: headers });

       this.http.post('//localhost:8088/contact', value, options).subscribe(res => {
           console.log('res:', res);
       });
    }
}
