import { Component, Input } from '@angular/core';
import { BudgetService } from './budget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  totalBudget:any;
  obs: Subscription; 
  title = 'budget-app';
  expenseListVal:any = [];
  sum:any = 0;
  checkIconStatus:any;
  totalBalance:any=0;
  deletedItemCost:any;

  constructor(private _budgetService:BudgetService) {
    this.obs = this._budgetService.getAmount().subscribe((val:any)=>{
    this.totalBudget = val;
   })
   }

  addExpenses(val:any){    
    if(val.costOfProduct > this.totalBalance){
      alert('You dont have enough budget');
    }
    else{
      this.expenseListVal.push({...val , isSelected:false});
       console.log(val);
      //tickicon removing after pushing
      setTimeout(() => {
        this.checkIconStatus = false;
      }, 2000);
      this.sum = this.expenseListVal.reduce((acc:any,val:any)=>{
        return acc + val.costOfProduct
      },0)
      this.totalBalance = this.totalBudget - this.sum;
    }
  }
  deletedItem(event:any){
    this.sum = this.sum - event[0].costOfProduct;
    this.totalBalance = this.totalBudget - this.sum;
  }
  setBalanceValue(event:any){
    this.totalBalance = event;
  }
  tickIcon(val:any){
   this.checkIconStatus=val;
  }
}
