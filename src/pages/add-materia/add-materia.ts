import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FaltasPage } from './../faltas/faltas';


@IonicPage()
@Component({
  selector: 'page-add-materia',
  templateUrl: 'add-materia.html',
})
export class AddMateriaPage {

  subjects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private storage: Storage) {
    this.subjects = this.navParams.get('subjects');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMateriaPage');
  }

  submit(): void {

    let materia = {
    };
    console.log(materia);
    this.http.post('http://192.168.43.75:5000/missedClasses/5bcd0dd5a5d4ae41f4e682e7' + this.storage.get('id'), this.subjects)
      .subscribe(res => {
        console.log(res);
        this.navCtrl.push(FaltasPage);
    })

  }

}
