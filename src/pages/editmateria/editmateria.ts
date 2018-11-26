import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage'

import { FaltasPage } from './../faltas/faltas';

@IonicPage()
@Component({
  selector: 'page-editmateria',
  templateUrl: 'editmateria.html',
})
export class EditmateriaPage {

  bubu: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public viewCtrl: ViewController, public http: Http, private storage: Storage) {
    console.log(this.navParams.get('bubu'))
    this.bubu = this.navParams.get('bubu');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmateriaPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  submit(): void {

    let materia = {
    };
    console.log(materia);
    this.http.post('http://192.168.43.75:5000/missedClasses/5bcd0dd5a5d4ae41f4e682e7' + this.storage.get('id'), this.bubu)
      .subscribe(res => {
        console.log(res);
        this.navCtrl.push(FaltasPage);
    })

  }
}
