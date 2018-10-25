import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { AddnewsPage } from './../addnews/addnews';



@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  
  news = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public http: Http) {
    this.news = []
    this.http.get('http://192.168.43.75:5000/news').subscribe(res => {
      console.log(res.json())
      this.news = res.json() 
    });
  }
  
   goToAddNewsPage() {
   this.navCtrl.push(AddnewsPage)
   };

  ionViewDidLoad() {
    console.log('a');
  }
  
}
