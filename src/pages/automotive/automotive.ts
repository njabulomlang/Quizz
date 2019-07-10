import { Storage } from '@ionic/storage';
import { Component,  ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { question } from '../model/question';
import { option } from '../model/option';
import { ResultsPage } from '../results/results';
import { FormGroup, FormControl } from '@angular/forms'


/**
 * Generated class for the AutomotivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-automotive',
  templateUrl: 'automotive.html',
})
export class AutomotivePage {
  @ViewChild(Content) content: Content;
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
  Q2 = ['True'];
  Q3 = ['False'];
  Q4 = ['False'];
  Q5 = ['True'];


  options;
  optionsForm;
  val: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage) {
    this.obj = [
      {id : 1, quest:"BMW originally from germany?", options : "this.answer", point: 20, answ: 'True'},
    {id : 2, quest:"VW means Volkswagen?", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 3, quest:"Henry Ford founded mustang?", options : "this.opt1[0]", point: 20, answ: 'True'},
    {id : 4, quest:"South African maximum speed is 150km/p?", options : "this.opt1[0]", point: 20, answ: 'False'},
    {id : 5, quest:"First black man to build car is Charles Richard Patterson?", options : "this.opt1[0]", point: 20, answ: 'True'}];

    this.optionsForm = new FormGroup({
      "options": new FormControl()});
    }


  ionViewDidLoad() {
    this.content.resize();
    this.optionsForm.controls.options.reset()
  }


  getTotal(value, Qnum){

    switch (Qnum) {
      case 1:
        this.Q1.map(res =>{
          if (value == res){
            this.getSum(20);
          }else this.getSum(0);

        })
        break;
        case 2:
        this.Q2.map(res =>{
          if (value == res){
            this.getSum(20);
          }else this.getSum(0);
        })
        break;
        case 3:
          this.Q3.map(res =>{
            if (value == res){
              this.getSum(20);


            }else this.getSum(0);

          })
          break;
          case 4:
            this.Q4.map(res =>{
              if (value == res){
                this.getSum(20);


              }else this.getSum(0);

            })
            break;
            case 5:
              this.Q5.map(res =>{
                if (value == res){
                  this.getSum(20);


                }else this.getSum(0);

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


getRes(){
  this.navCtrl.push(ResultsPage, this.val);
}
}
