import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../app/shared/shared.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PhoneNumberSignInComponent } from './phone-number-signin/phone-number-signin.component';
import { Mask } from '../../app/shared/directives/mask.directive';
import { VerificationCodePage } from './verification-code/verification-code.component';

var config = {
    apiKey: "AIzaSyC21ASBLaSe6JBU7jgBNgxhpuZPGO0iIHQ",
    authDomain: "parkingapp-b7bf4.firebaseapp.com",
    databaseURL: "https://parkingapp-b7bf4.firebaseio.com",
    projectId: "parkingapp-b7bf4",
    storageBucket: "parkingapp-b7bf4.appspot.com",
    messagingSenderId: "776179123913"
};  

@NgModule({
  declarations: [
    PhoneNumberSignInComponent,
    Mask,
    VerificationCodePage
  ],
  imports: [
  	CommonModule,
  	SharedModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  exports: [
    PhoneNumberSignInComponent,
    VerificationCodePage
  ],
  entryComponents:[
    PhoneNumberSignInComponent,
    VerificationCodePage
  ]
})
export class PhoneNumberLoginModule {}
