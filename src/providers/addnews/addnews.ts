import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the AddnewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AddnewsProvider {

  data: any;

  constructor(public http: Http, public headers: Headers) {
    this.data = null;
  }
   
  getNews() {
   if (this.data) {
     return Promise.resolve(this.data);
     }
    return new Promise(resolve => {
      this.http.get('http://172.16.34.235:5000/news')
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve (this.data);
      });   
    });
  }
  createNews(post){
    let headers = new Headers();
    headers.append('Content type', 'application/json');

    this.http.post('http://172.16.34.235:5000/news', JSON.stringify(post), {headers: headers})
    .subscribe(res => {
      console.log(res.json());
    });
  }


}
