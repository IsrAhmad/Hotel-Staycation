import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SharedModule } from 'src/app/shared/shared.module';

/**for social login */
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule ,
    SocialLoginModule
   
  ],
  providers:[
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1045968381605-ndjalei8aabir5ngf3b930v5q06fm2mt.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ]
})
export class AuthModule { }
