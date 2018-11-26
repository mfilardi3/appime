import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from './../pages/perfil/perfil';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { FeedPage } from './../pages/feed/feed';
import { AddnewsPage } from './../pages/addnews/addnews';
import { FaltasPage } from './../pages/faltas/faltas';
import { AcademicoPage } from './../pages/academico/academico';
import { EditmateriaPage } from './../pages/editmateria/editmateria';
import { AddMateriaPage } from './../pages/add-materia/add-materia';

import { AddnewsProvider } from '../providers/addnews/addnews';
import { StoredataDirective } from './../directives/storedata/storedata';


@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    PerfilPage,
    CadastroPage,
    FeedPage,
    AddnewsPage, 
    FaltasPage, 
    AcademicoPage,
    EditmateriaPage,
    AddMateriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    CadastroPage,
    FeedPage,
    AddnewsPage,
    FaltasPage,
    AcademicoPage,
    EditmateriaPage,
    AddMateriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AddnewsProvider,
    StoredataDirective
  ]
})
export class AppModule {
  
}
