import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	url: string;

	constructor(private inAppBrowser: InAppBrowser){

	}


	openwebpage(url: string){
		const options: InAppBrowserOptions = {

			zoom: 'no'
		}
		const browser = this.inAppBrowser.create(url, '_self', options);
		//browser.on('').subscribe()
	}
}
