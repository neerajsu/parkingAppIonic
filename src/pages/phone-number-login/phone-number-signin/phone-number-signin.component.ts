import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { VerificationCodePage } from '../verification-code/verification-code.component';
import { Storage } from '@ionic/storage';
import { TabsComponent } from '../../tabs/tabs-component/tabs.component';

@Component({
  templateUrl: './phone-number-signin.html'
})
export class PhoneNumberSignInComponent {
  account: { phoneNumber: string, confirmationCode: string } = {
    phoneNumber: '',
    confirmationCode: ''
  };

  recaptchaVerifier: any;
  confirmationResult: any;
  disableSignInButton: boolean = false;
  canEnterView: boolean = true;

  constructor(
    private navController: NavController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private angularFireAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private storage: Storage) {
      this.storage  = storage;
    }
  

  signUp() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': function (response) {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        console.log("captcha solved");
      }
    });


    this.angularFireAuth.auth.signInWithPhoneNumber("+1" + this.account.phoneNumber,
      this.recaptchaVerifier).then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        alert("confirmationResult: " + JSON.stringify(confirmationResult));
        loader.dismiss();
        let modal = this.modalCtrl.create(VerificationCodePage, { 'confirmationResult': confirmationResult });
        modal.onDidDismiss(data => {
          this.confirmationResult.confirm(data).then((result) => {
            let user = result.user;
            //Uncomment following lines to test on machine
            this.storage.set('firebase-user', user);
            this.storage.set('firebase-confirmationResult', confirmationResult);
            this.handleSuccess('Succesful login with phone number');
            this.navController.push(TabsComponent, {
              //You can pass value into components
            });
          }).catch((error) => {
            loader.dismiss();
            this.handleError(error);
            this.disableSignInButton = false;
          })
        });
        modal.present();
        this.disableSignInButton = true;
      }).catch((error) => {
        loader.dismiss();
        this.handleError(error);
      });
  }

  private handleSuccess(successMessage: string) {
    let toast = this.toastController.create({
      message: successMessage,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  private handleError(error: any) {
    let errorMessage = error;
    if (errorMessage && errorMessage.message) {
      let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, '');
      let toast = this.toastController.create({
        message: message,
        duration: 6000,
        position: 'bottom'
      });
      toast.present();
    }
  }

  onSignInSubmit() {

  }

  checkIfUserIsLoggedIn() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();
    //this.angularFireAuth.auth.

  }

  isPhoneNumberValid() {
    //TODO : Add validtion to make sure phone number is correct
    return true;
  }

  login() {
    let loader = this.loadingController.create({
      content: "Please wait"
    });
    loader.present();

    this.angularFireAuth.auth.signInWithEmailAndPassword(
      this.account.phoneNumber,
      this.account.confirmationCode
    ).then((value) => {
      loader.dismiss();
      //
    }).catch((error) => {
      loader.dismiss();
      let errorMessage = error;
      if (errorMessage && errorMessage.message) {
        let message = errorMessage.message.replace(/<(?:.|\n)*?>/gm, '');
        let toast = this.toastController.create({
          message: message,
          duration: 6000,
          position: 'bottom'
        });
        toast.present();
      }
    });
  }

}
