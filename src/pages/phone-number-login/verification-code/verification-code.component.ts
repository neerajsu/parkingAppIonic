import { Component, NgZone } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

@Component({
    templateUrl: 'verification-code.html'
})

export class VerificationCodePage {
    verificationCode:String;

    constructor(public viewCtrl: ViewController) {
        
    }

    submitVerificationCode(){
        this.viewCtrl.dismiss(this.verificationCode);
	}
}