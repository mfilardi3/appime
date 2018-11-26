import { config } from '../../app/main';
import { Http } from '@angular/http';
import { CadastroPage } from './../cadastro/cadastro';
import { PerfilPage } from './../perfil/perfil';
import { Storage } from '@ionic/storage'


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  login:any;
  senha:any;
  

  constructor(public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, private storage: Storage) {
  }
  
  ionDidLoad() {
    console.log('ionDidLoad User');
  }
  
  Entrar(): void {

    console.log("entrou")
    let user = {
      login: this.login,
      password: this.senha,
    };
    console.log(user)
   this.http.post(config + 'users/login', user)
    .subscribe (res => {
      console.log(res)
     
      
      if(res.json().token !== '') {
        this.navCtrl.setRoot(PerfilPage)
        this.storage.set('id', res.json().user_id);
        console.log(this.storage.get('id'));
      }
      else { 
        const alert = this.alertCtrl.create({
          title: 'Senha ou Usuário incorreto',
          buttons: ['OK']
        });
        alert.present();


        console.log('erro') 
      }
    })
  };


  gotocadastro(){
    console.log("oi")
    this.navCtrl.push(CadastroPage)
  };
}