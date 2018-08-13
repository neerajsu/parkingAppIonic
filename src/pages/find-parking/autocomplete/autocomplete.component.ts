import { Component, NgZone } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { MapsAPILoader } from '@agm/core';
import { LocationService } from '../../../app/shared/services/location/location.service';
import { AutoCompleteData } from './autocomplete-data-interface';

declare let google: any;

@Component({
    templateUrl: 'autocomplete.html',
    providers: [LocationService]
})

export class AutocompletePage {
    autocompleteItems;
    autocomplete;

    latitude: number = 0;
    longitude: number = 0;
    geo: any

    autoCompleteService: any;
    autoCompleteServiceIsReady: boolean = false;

    geocoderService: any;
    geocoderServiceIsReady: boolean = false;

    constructor(public viewCtrl: ViewController, private zone: NgZone, private mapsAPILoader: MapsAPILoader,
                private locationService: LocationService) {
        this.mapsAPILoader.load().then(() => {
            this.autoCompleteService = new google.maps.places.AutocompleteService();
            this.autoCompleteServiceIsReady = true;
            this.geocoderService = new google.maps.Geocoder();
            this.geocoderServiceIsReady = true;
        });
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    chooseItem(item: any) {
        if (this.geocoderServiceIsReady) {
            this.geocoderService.geocode({ 'address': item }, (results, status) => {
                let data:AutoCompleteData  = {
                    'place' : this.getAddressPartOnly(item),
                    'latitude' :  results[0].geometry.location.lat(),
                    'longitude' : results[0].geometry.location.lng()
                }
                this.viewCtrl.dismiss(data);
            });
        }
    }

    getAddressPartOnly(item: String) {
        return item ? item.split(",")[0] : item;
    }

    getCityStateAndCountry(item: String) {
        return item ? item.substring(item.indexOf(",") + 1) : item;
    }

    updateSearch() {

        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }

        let me = this;
        if (this.autoCompleteServiceIsReady) {
            this.autoCompleteService.getPlacePredictions({
                input: this.autocomplete.query,
                componentRestrictions: {
                    country: 'us'
                }
            }, (predictions, status) => {
                me.autocompleteItems = [];

                me.zone.run(() => {
                    if (predictions != null) {
                        predictions.forEach((prediction) => {
                            me.autocompleteItems.push(prediction.description);
                        });
                    }
                });
            });
        }
    }

    //convert Address string to lat and long
    geoCode(address: any) {
        
    }

    chooseCurrentLocation(){
        this.locationService.getCurrentPositionPromise().then((response) => {
            let data:AutoCompleteData  = {
                'place' : 'Your location',
                'latitude' : response.coords.latitude,
                'longitude' : response.coords.longitude
            }
            this.viewCtrl.dismiss(data);
		});
	}
}