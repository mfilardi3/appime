import { FaltasPage } from './../faltas/faltas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the AcadêmicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acadêmico',
  templateUrl: 'acadêmico.html',
})
export class AcadêmicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcadêmicoPage');
  }

  gotofaltas() {
    this.navCtrl.push(FaltasPage)
  }
}
