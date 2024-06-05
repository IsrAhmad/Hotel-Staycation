import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent {
  lang: string = localStorage.getItem('lang') !== null ? localStorage.getItem('lang')! : 'en';


  constructor(private translate: TranslateService) {
    console.log(this.lang)
  
   /* translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      console.log(event)
    });*/

    this.selectChange(this.lang)

}

selectChange(val:string):void{
  this.translate.setDefaultLang(val);

  this.translate.use(val);
  this.lang=val
  
  localStorage.setItem('lang',this.lang)

}

}
