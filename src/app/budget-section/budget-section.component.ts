import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() totalExpense:any=0;
  @Output() setBalanceValue = new EventEmitter<any>();

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
      this.setBalanceValue.emit(this.totalExpense > 0 ? addedVal - this.totalExpense :addedVal);
      amount.value = null;
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
}
