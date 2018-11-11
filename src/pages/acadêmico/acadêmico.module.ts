import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcadêmicoPage } from './acadêmico';

@NgModule({
  declarations: [
    AcadêmicoPage,
  ],
  imports: [
    IonicPageModule.forChild(AcadêmicoPage),
  ],
})
export class AcadêmicoPageModule {}
