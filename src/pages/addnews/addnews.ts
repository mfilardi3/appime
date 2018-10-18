import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddnewsProvider } from './../../providers/addnews/addnews';


/**
 * Generated class for the AddnewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addnews',
  templateUrl: 'addnews.html',
})
export class AddnewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public form: FormGroup, private _FB: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewsPage');
  }

}
