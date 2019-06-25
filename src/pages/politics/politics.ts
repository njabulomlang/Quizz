import { option } from './../model/option';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { question } from '../model/question';

import { ResultsPage } from '../results/results';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the PoliticsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-politics',
  templateUrl: 'politics.html',
})
export class PoliticsPage {

  obj : Array<question> = [];
  sum : any;
  opt1 : Array<option>  = [
    {id: 1, opt1: "True", opt2: "False", opt3: "Maybe"}
  ];
  answer = [
    {option: 'True'},
    {option: 'False'},
    {option: 'Maybe'}
  ];
  Q1 = ['True'];
  Q2 = ['False'];
  Q3 = ['True'];
  Q4 = ['False'];
  Q5 = ['True'];

  val: number = 0;
  pts: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.obj = [
      {id : 1, quest:"President of Qatar is Hamad Al Thani?", options : "this.answer", point: 20, answ: 'True'},
    {id : 2, quest:"AU president is Mrs Dlamini-Zuma?", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 3, quest:"John L. Dube founded ANC in 1912?", options : "this.opt1[0]", point: 20, answ: 'True'},
    {id : 4, quest:"Steve Biko died in car accident", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 5, quest:"Mandela spent years in Robben island Arrested?", options : "this.opt1[0]", point: 20, answ: 'True'}];
  }

  ionViewDidLoad() {
  console.log(this.opt1[0]);



  }


  getTotal(value, Qnum){

    switch (Qnum) {
      case 1:
        this.Q1.map(res =>{
          if (value == res){
            this.getSum(20);


          }

        })
        break;
        case 2:
        this.Q2.map(res =>{
          if (value == res){
            this.getSum(20);


          }
        })
        break;
        case 3:
          this.Q3.map(res =>{
            if (value == res){
              this.getSum(20);


            }

          })
          break;
          case 4:
            this.Q4.map(res =>{
              if (value == res){
                this.getSum(20);


              }

            })
            break;
            case 5:
              this.Q5.map(res =>{
                if (value == res){
                  this.getSum(20);


                }

              })
              break;
      default:
        break;
    }


  }
  getSum(value){
    this.val = this.val + value;
    console.log(this.val);
    this.storage.set('myData',this.val);

  }

  ionViewDidLeave(){

  }
getRes(){
  this.navCtrl.push(ResultsPage, this.val);


}
  }



