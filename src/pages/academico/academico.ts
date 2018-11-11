import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FaltasPage } from './../faltas/faltas';
/*
 * Generated class for the AcademicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-academico',
  templateUrl: 'academico.html',
})
export class AcademicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcademicoPage');
  }

  gotofaltas() {
    this.navCtrl.push(FaltasPage)
  }
}
