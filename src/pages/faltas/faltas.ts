import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditmatériaPage } from '../editmatéria/editmatéria';
import { ModalController } from 'ionic-angular';


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
    const modal = this.modalCtrl.create(EditmatériaPage);
    modal.present();
  }
}
