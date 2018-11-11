import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EditmateriaPage } from './../editmateria/editmateria';

/**
 * Generated class for the FaltasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faltas',
  templateUrl: 'faltas.html',
})
export class FaltasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaltasPage');
  }

  gotoeditmateria() {
    const modal = this.modalCtrl.create(EditmateriaPage);
    modal.present();
  }
}
