import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { EditmateriaPage } from './../editmateria/editmateria';
import { config } from '../../app/main';
import { AddMateriaPage } from './../add-materia/add-materia';


@IonicPage()
@Component({
  selector: 'page-faltas',
  templateUrl: 'faltas.html',
})

export class FaltasPage {

  materias : any;
  //pontos: 0;
  //porcentagem: 0;
    
 //   "_id" : ObjectId("5be8cfe94c39324a53df2a3e"),
  //  "user_id" : ObjectId("5bc57148ddc54f94d1876f03"),
 
 // misses: number;
 // porcentagem: number;
 // pontos: number;


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public http: Http, private storage: Storage) {
   // let materia = {
   //   materia.name
  //  }
    this.http.get(config + 'missedClasses/5bcd0dd5a5d4ae41f4e682e7').subscribe(res => {
    console.log(res.json().subjects)
    this.materias = res.json().subjects
    this.materias.forEach(materia => {
      materia.pontos = 0;
      materia.porcentagem = 0;
      materia.pontos +=   materia.misses*3;
      materia.porcentagem +=  materia.misses*100/  materia.workload;
    });
    
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaltasPage');
  }

  addMateria() {
//    const modal = this.modalCtrl.create(AddMateriaPage, {
 //   subjects: this.materias
//    });
//    modal.present();
    let defaultGrade = {"name": "Matéria", "workload": 40, "misses": 0};
    this.materias.push(defaultGrade);
    console.log(this.materias);
  }

  Save(): void {
    let materia = {
    };
    this.materias.forEach(materia => {
      materia.pontos = 0;
      materia.porcentagem = 0;
      materia.pontos +=   parseInt(materia.misses)*3;
      materia.porcentagem +=  parseInt(materia.misses)*100/  parseFloat(materia.workload);
    });
    console.log(materia);
    console.log(this.materias);
    this.http.post(config + 'missedClasses/5bcd0dd5a5d4ae41f4e682e7' , this.materias)
      .subscribe(res => {
        console.log(res);
    })

  }
}
