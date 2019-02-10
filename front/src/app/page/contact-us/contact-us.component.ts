import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { ExpressService } from '@service/express/express.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public formSubmitted: boolean = false;

  public showError: boolean = false;
  public showSuccess: boolean = false;

  public errorArray: any[] = [];
  public successMsg: string = '';

  public serverSideValidation: boolean = false;

  contactForm = this._fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    message: ['',[
      Validators.required,
      Validators.minLength(30)
    ]]
  });

  get email() { return this.contactForm.get('email'); }

  get message() { return this.contactForm.get('message'); }

  constructor(
    private _fb: FormBuilder,
    private _expressService: ExpressService
  ) { }

  ngOnInit() {
  }

  onSubmit() {

    this.formSubmitted = false;
    this.showError = false;
    this.showSuccess = false;

    if(!this.serverSideValidation)
    {
      this.formSubmitted = true;
    }
    else
    {
      let body = {
        email: this.contactForm.value.email,
        message: this.contactForm.value.message
      }

      this._expressService.post(body, '/api/contact').subscribe((res) => {

        if(environment.debug) console.log('POST /api/contact: SUCCESS', res);

        this.successMsg = res.message;
        this.showSuccess = true;

      }, (error) => {

        if(environment.debug) console.log('POST /api/contact: ERROR', error);

        this.errorArray = error.error.messages;
        this.showError = true;

      });
    }

  }

}
