import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PoliticsPage } from '../politics/politics';
import { SciencePage } from '../science/science';
import { NaturePage } from '../nature/nature';
import { SportsPage } from '../sports/sports';
import { AutomotivePage } from '../automotive/automotive';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
   this.navCtrl.remove;
  }
  politics(){
   this.navCtrl.push(PoliticsPage);
  }

  science(){
    this.navCtrl.push(SciencePage);
  }
  nature(){
    this.navCtrl.push(NaturePage);
  }
  sports()
  {
    this.navCtrl.push(SportsPage);
  }
  automotive(){
    this.navCtrl.push(AutomotivePage);
  }

}
