import { FeedPage } from './../feed/feed';
import { Http, Headers } from '@angular/http';
import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

import { AddnewsProvider } from './../../providers/addnews/addnews';
import { StoredataDirective } from './../../directives/storedata/storedata';

@IonicPage()
@Component({
  selector: 'page-addnews',
  templateUrl: 'addnews.html',
})
export class AddnewsPage {

  title: any;
  subject: any;
  content: any;
  additional_info: any;

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public http: Http) {
    let headers = new Headers();
  }

  submit(): void {

    let post = {
      author_id:  '5bcd0dd5a5d4ae41f4e682e7'  ,
      author_name :  'Marcelle Filardi' ,
      timestamp: '15',
      title: this.title,
      subject: this.subject,
      content: this.content,
      additional_info: this.additional_info

    };
    console.log(post);
    this.http.post('http://192.168.43.75:5000/news', post)
      .subscribe(res => {
        console.log(res);
        this.navCtrl.push(FeedPage);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddnewsPage');
  }

}
