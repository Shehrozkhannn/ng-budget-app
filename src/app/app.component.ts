import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'budget-app';
  expenseListVal:any = [];
  sum:any = 0;


  addExpenses(val:any){
    this.expenseListVal.push(val);
    this.sum = this.expenseListVal.reduce((acc:any,val:any)=>{
      return acc + val.costOfProduct
    },0)
    console.log(this.expenseListVal);
    console.log(this.sum);
    
  }
}
