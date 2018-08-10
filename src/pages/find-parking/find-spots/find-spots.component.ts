import { Component } from '@angular/core';
import { NavController, Events, MenuController, NavParams } from 'ionic-angular';

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

@Component({
	selector: 'find-spots',
	templateUrl: 'find-spots.html'
})
export class FindSpotsComponent {
	deviceHeight: number;
	deviceWidth: number;
	selectedMarker: any;
	parkingSpots: any = [
		{
			"parkingSpot": "101",
			"parkingSpotOwner": "abcd",
			"releasedOn": "2018-07-29T12:37:08.327+0000",
			"revokeOn": null,
			"parkingStatus": null
		},
		{
			"parkingSpot": "102",
			"parkingSpotOwner": "abasdsad",
			"releasedOn": "2018-07-29T12:37:08.327+0000",
			"revokeOn": null,
			"parkingStatus": null
		}
	];
	constructor(
		private navController: NavController,
		private menuController: MenuController,
		private events: Events,
		public platform: Platform,
		private navParams: NavParams) {
		this.selectedMarker = navParams.get('selectedMarker')
		this.deviceHeight = platform.height();
		this.deviceWidth = platform.width();
	}
	ngOnInit() {

	}

}
