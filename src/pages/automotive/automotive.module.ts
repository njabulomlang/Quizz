import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutomotivePage } from './automotive';

@NgModule({
  declarations: [
    AutomotivePage,
  ],
  imports: [
    IonicPageModule.forChild(AutomotivePage),
  ],
})
export class AutomotivePageModule {}
