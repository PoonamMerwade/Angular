import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private firstNum:number=null;
  private secondNum:number=null;
  private result:number=null;

  public constructor(){
    this.firstNum=this.firstNum;
    this.secondNum=this.secondNum;
  }

  public add():number{
    this.result= this.firstNum+this.secondNum;
    return this.result;

  }
  public sub():number{
    this.result=this.firstNum-this.secondNum;
    return this.result;
  }
  public prod():number{
    this.result=this.firstNum*this.secondNum;
    return this.result;
  }
  public div():number{
    this.result=this.firstNum/this.secondNum;
    return this.result;
  }
}
