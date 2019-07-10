
import { Storage } from '@ionic/storage';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { HomePage } from '../home/home';



/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  totalRes: any = 0;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

  }

  ionViewDidLoad() {

    this.storage.get('myData').then((data)=>{
    this.totalRes = data;
      console.log(this.totalRes)
      });

  }

retry(){
  this.navCtrl.pop();
}
quit()
{
  this.navCtrl.push(HomePage);
}
ionViewDidLeave(){
  this.content.resize();
 this.storage.set('myData', this.totalRes=0);
}


}

