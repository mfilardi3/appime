import { FeedPage } from './../feed/feed';
import { HomePage } from './../home/home';

import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  gotofeed() {
    this.navCtrl.push(FeedPage)
  }

  logout() {
    this.navCtrl.push(HomePage)
  };

}
  