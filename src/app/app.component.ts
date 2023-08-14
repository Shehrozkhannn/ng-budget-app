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
  deletedItemCost:any;


  addExpenses(val:any){
    this.expenseListVal.push({...val , isSelected:false});
    this.sum = this.expenseListVal.reduce((acc:any,val:any)=>{
      return acc + val.costOfProduct
    },0)
  }
  deletedItem(event:any){
    console.log("DELETED ITEM" ,event[0].costOfProduct)
    this.sum = this.sum - event[0].costOfProduct;
    

  }
}
