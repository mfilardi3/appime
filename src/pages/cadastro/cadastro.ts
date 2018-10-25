import { PerfilPage } from './../perfil/perfil';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  formgroup: FormGroup;
  usuario:AbstractControl;
  email:AbstractControl;
  turma:AbstractControl;
  engenharia:AbstractControl;
  senha1:AbstractControl;
  senha2:AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formbuilder:FormBuilder) {

    this.formgroup = formbuilder.group({
      usuario:['', Validators.required],
      email:['', Validators.required],
      turma:['', Validators.required],
      engenharia:[Validators.required],
      senha1:['', Validators.required],
      senha2:['', Validators.required]
    });

    this.usuario = this.formgroup.controls['usuario'];
    this.email = this.formgroup.controls['email'];
    this.turma = this.formgroup.controls['turma'];
    this.engenharia = this.formgroup.controls['engenharia'];
    this.senha1 = this.formgroup.controls['senha1'];
    this.senha2 = this.formgroup.controls['senha2'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cadastrar() {
    this.navCtrl.setRoot(PerfilPage)
  };

}
