import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  constructor(private _ToastrService:ToastrService ,private _Router:Router){}

  contactForm:FormGroup=new FormGroup({
    name:new FormControl(null,[Validators.required]),
    email:new FormControl(null,[Validators.required]),
    subject:new FormControl(null,[Validators.required]),
    message:new FormControl(null,[Validators.required]),
  })

  contact(form:FormGroup){
    if(form.valid){
      this._ToastrService.success('Your Message Sended Successfuly');
    }
    this._Router.navigate(['/guest/home']);
  }
}
