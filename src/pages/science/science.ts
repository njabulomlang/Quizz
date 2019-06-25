import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { question } from '../model/question';
import { option } from '../model/option';
import { ResultsPage } from '../results/results';


/**
 * Generated class for the SciencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.obj = [
      {id : 1, quest:"MVC means Model View Controller?", options : "this.answer", point: 20, answ: 'True'},
    {id : 2, quest:"TypeScript founded in 2006?", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 3, quest:"Steve Woznaik, Steve Jobs and friends founded Apple?", options : "this.opt1[0]", point: 20, answ: 'True'},
    {id : 4, quest:"C# founded in 1991?", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 5, quest:"Bill Gates is the founder of Windows?", options : "this.opt1[0]", point: 20, answ: 'True'}];
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

