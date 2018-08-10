import { Component } from '@angular/core';

import { ContactComponent } from '../../contact/contact-component/contact.component';
import { Platform } from 'ionic-angular';
import { FindLotsComponent } from '../../find-parking/find-lots/find-lots.component';
import { HomeComponent } from '../../home/home-component/home.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsComponent {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = FindLotsComponent;
  tab2Root: any = HomeComponent;
  tab3Root: any = ContactComponent;
  tabBarPlacement: String = "top";

  constructor(public platform: Platform) {
    if(this.platform.is('ios')){
      this.tabBarPlacement = 'bottom';
    } else {
      this.tabBarPlacement = 'top';
    }
  }
}
