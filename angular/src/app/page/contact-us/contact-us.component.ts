import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  public formSubmitted: boolean = false;

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
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.formSubmitted = true;
    console.log('contact form', this.contactForm);
  }

}
