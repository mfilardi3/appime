import { CadastroPage } from './../cadastro/cadastro';
import { PerfilPage } from './../perfil/perfil';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quiabo: FormGroup;
  login:AbstractControl;
  senha:AbstractControl;

  constructor(public navCtrl: NavController, public formbuilder:FormBuilder) {

    this.quiabo = formbuilder.group({
      login:['', Validators.required],
      senha:['', Validators.required]
    });

    this.login = this.quiabo.controls['login'];
    this.senha = this.quiabo.controls['senha'];

  }

Entrar(){
  this.navCtrl.setRoot(PerfilPage)
};

gotocadastro(){
  this.navCtrl.push(CadastroPage)
};
}
