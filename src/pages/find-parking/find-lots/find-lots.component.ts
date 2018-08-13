import { Component } from '@angular/core';
import { NavController, Events, MenuController, ModalController } from 'ionic-angular';

import { AboutComponent } from '../../about/about-component/about.component';
import { WordpressHome } from '../../wordpress/wordpress-home/wordpress-home.component';
import { WordpressPosts } from '../../wordpress/wordpress-posts/wordpress-posts.component';
import { WordpressCategories } from '../../wordpress/wordpress-categories/wordpress-categories.component';
import { WordpressTags } from '../../wordpress/wordpress-tags/wordpress-tags.component';
import { WordpressFavorites } from '../../wordpress/wordpress-favorites/wordpress-favorites.component';
import { WordpressPages } from '../../wordpress/wordpress-pages/wordpress-pages.component';
import { WordpressPage } from '../../wordpress/wordpress-page/wordpress-page.component';
import { WordpressMenus } from '../../wordpress/wordpress-menus/wordpress-menus.component';
import { GoogleMapsComponent } from '../../google-maps/google-maps-component/google-maps.component';
import { SlidesComponent } from '../../slides/slides-component/slides.component';
import { FeedCategoriesComponent } from '../../feeds/feed-categories/feed-categories.component';
import { FeedCategoryComponent } from '../../feeds/feed-category/feed-category.component';
import { YoutubeVideosComponent } from '../../youtube/youtube-videos/youtube-videos.component';
import { YoutubeChannelComponent } from '../../youtube/youtube-channel/youtube-channel.component';
import { BarcodeScannerComponent } from '../../barcode-scanner/barcode-scanner-component/barcode-scanner.component';
import { ChartsComponent } from '../../charts/charts-component/charts.component';
import { FirebaseHomeComponent } from '../../firebase/firebase-home/firebase-home.component';
import { Platform } from 'ionic-angular';
import { GoogleMapsScriptProtocol } from '../../../../node_modules/@agm/core';
import { FindSpotsComponent } from '../find-spots/find-spots.component';
import { AutocompletePage } from '../autocomplete/autocomplete.component';

@Component({
	selector: 'find-lots',
	templateUrl: 'find-lots.html'
})
export class FindLotsComponent {
	buildingsList = [
		{
			code : 123,
			name : "Building A"
		},
		{
			code : 124,
			name : "Building B"
		}
	];
	latitude: number = 47.556041;
	longitude: number = -122.04965;
	buildingSelection: any = {};
	pages: Array<{title: string, component: any, icon: string, note: string, params?: any}>;
	deviceHeight: number;
	deviceWidth: number;
	mapsHeight: number;
	mapsCSSHeight: String;
	zoom: number = 15;
	selectedMarker:any;
	address:any;
	
  
  // Google Map center
  
  
  markers = [
	  {
		  latitude: 47.55627995194901,
		  longitude: -122.04789928036918,
		  label: "Lot A",
		  address: "22010 Southeast 51st Street, Issaquah, Washington 98027, United States",
		  workingHours: "6:00 AM to 11:00 PM",
		  phoneNumber: "573-232-4197",
		  email: "abcd@gmail.com",
	  },
	  {
		  latitude: 47.5540467199795,
		  longitude: -122.04678348141898,
		  label: "Lot B",
		  address: "5150 220th Avenue Southeast, Issaquah, Washington 98029, United States",
		  workingHours: "6:00 AM to 11:00 PM",
		  phoneNumber: "573-222-4197",
		  email: "defd@gmail.com",
	  },
	  {
		  latitude: 47.55700089607407,
		  longitude: -122.05015233594169,
		  label: "Lot C",
		  address: "21930 Southeast 51st Street, Issaquah, Washington 98027, United States",
		  workingHours: "6:00 AM to 11:00 PM",
		  phoneNumber: "273-222-4197",
		  email: "dsdgasffd@gmail.com",
	  }
  ]

	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events,
		private modalCtrl:ModalController,
		public platform: Platform){
			this.deviceHeight = platform.height();
			this.deviceWidth = platform.width();
			this.address = {
				'place': ''
			};
		}

	ngOnInit() {
		this.setMapsHeight();
		this.addBlueIconURLToMarkerArray();
	}

	markerClicked(marker: any, i: number) {
		this.selectedMarker = marker;
		for (let index = 0; index < this.markers.length; index++) {
			if(index == i){
				this.markers[index]["iconUrl"] = 'http://maps.google.com/mapfiles/ms/icons/red.png';
			} else {
				this.markers[index]["iconUrl"] = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
			}
		} 
		
	}

	private addBlueIconURLToMarkerArray() {
		this.markers.map(element => {
			element["iconUrl"] = 'http://maps.google.com/mapfiles/ms/icons/blue.png';
		});
	}

	setMapsHeight() {
		this.mapsHeight = (this.deviceHeight * 45)/100;
		this.mapsCSSHeight = this.mapsHeight + "px";
	}

	findParkingSpot() {
		this.navController.push(FindSpotsComponent, {
			selectedMarker: this.selectedMarker
		});
	}

	selectBuilding(buildingSelection : any) {
		//Do something with updating drop downs/values based on this selection
	}

	showAddressModal () {
		let modal = this.modalCtrl.create(AutocompletePage);
		let me = this;
		modal.onDidDismiss(data => {
		  this.address.place = data.place;
		  this.latitude = data.latitude;
		  this.longitude = data.longitude;
		});
		modal.present();
	  }

}
