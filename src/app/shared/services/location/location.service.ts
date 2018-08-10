import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Injectable()
export class LocationService {

  constructor(private platform: Platform, private geolocation: Geolocation) {}

    public getCurrentPositionPromise(){
      return this.geolocation.getCurrentPosition();
    }

    public watchPositionObservable(){
      return this.geolocation.watchPosition();
    }

  //   platform.ready().then(() => {

  //     // get current position
  //     geolocation.getCurrentPosition().then(pos => {
  //       console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
  //     });

  //     const watch = geolocation.watchPosition().subscribe(pos => {
  //       console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
  //     });

  //     // to stop watching
  //     watch.unsubscribe();

  //   });

  // }

}