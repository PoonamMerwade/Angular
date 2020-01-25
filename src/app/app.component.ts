import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private jobTitle:string=null;
  private salary:number=null;
  private annualSalary:number=null;
  private logo:string=null;
  private userName:string=null;

  constructor(){
    this.jobTitle="trainer";
    this.salary=50000;
    this.logo="assets/sudeep1.jpg";
  }
  public getAnnualSalary():number{
    this.annualSalary=this.salary*12;
    return this.annualSalary;
  }
  public greetUser():void{
    this.userName="Ms"+this.userName;
    alert("welcome"+this.userName);
  }
}
