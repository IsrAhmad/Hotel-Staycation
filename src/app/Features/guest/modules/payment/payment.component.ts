
import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
 

  constructor(
     private _formBuilder: FormBuilder , ) {}

     PaymentFormGroup = this._formBuilder.group({
      cardNumber: ['', Validators.required],
    });





  ngOnInit(): void {
   
  }

  

 



}
