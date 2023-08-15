import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-section',
  templateUrl: './budget-section.component.html',
  styleUrls: ['./budget-section.component.scss']
})
export class BudgetSectionComponent implements OnInit {
  amountVal:number = 0;
  obs: Subscription; 

  constructor(private _budgetService:BudgetService) { 
    this.obs = this._budgetService.getAmount().subscribe((val:any)=>{
     this.amountVal = val;
   })
  }

  ngOnInit(): void {
  }
  setBudget(amount:any){
      const addedVal= this.amountVal + Number(amount.value);
      this._budgetService.setAmount(addedVal);
      amount.value = ''; 
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
}
