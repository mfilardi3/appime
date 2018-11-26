import { config } from './../../app/main';
import { FaltasPage } from './../faltas/faltas';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
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
 id: any;
 name: any;


  constructor(public navCtrl: NavController, public http: Http, private storage: Storage) {

  }
  
  storeData() {
    this.storage.get('id')
      .then(user_id => {
       this.http.get( config + 'users/' + user_id).subscribe(res => {
        
       this.name = res.json().name
  });
    })
    //console.log(this.id)
    //this.http.get('http://192.168.43.89:5000/users/' + user_id).subscribe(res => {
    //console.log(res.json())

  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
    this.storeData();
  }

  gotofeed() {
    this.navCtrl.push(FeedPage)
  }

  logout() {
    this.navCtrl.setRoot(HomePage)
  };

  gotoFaltas() {
    this.navCtrl.push(FaltasPage)
  };
}