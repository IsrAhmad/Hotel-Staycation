import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { GlobalInterceptor } from './Core/interceptors/global.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './Core/interceptors/loading.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 4000,
      progressBar: true,

    }),    NgxSpinnerModule.forRoot(),
    TranslateModule.forRoot(
      {
        defaultLanguage: 'en',

        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }
    ),
    SocialLoginModule,


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:GlobalInterceptor,multi:true},
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi:true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('663830818988-lhcdfkvb5449g9ap9lr00n3ur0pitiaj.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('YOUR_FACEBOOK_APP_ID')
          }
        ]
      } as SocialAuthServiceConfig,
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
