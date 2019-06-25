import { PoliticsPage } from './../politics/politics';
import { Storage } from '@ionic/storage';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage) {

  }

  ionViewDidLoad() {

    this.storage.get('myData').then((data)=>{
    this.totalRes = data;
      console.log(this.totalRes)
      });

  }



}

