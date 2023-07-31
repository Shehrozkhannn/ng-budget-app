import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  // titleOfProduct:any;
  // costOfProduct:any;
  @Output() detailsOfProduct = new EventEmitter<any>();
  totalBudget: any;
  obs: Subscription;
  expenses = {
    titleOfProduct: undefined,
    costOfProduct: 0
  }
  checkCost: boolean = false;

  constructor(private _budgetService: BudgetService) {
    this.obs = this._budgetService.getAmount().subscribe((val: any) => {
      this.totalBudget = val;
    })

  }

  ngOnInit(): void {
  }
  checkAmount() {

    if (this.totalBudget <= 0) {
      alert("Your Account budget is empty")
      return
    }
    if(this.expenses.costOfProduct < 0) {
      this.checkCost = true
      return
    }
    else {
      this.detailsOfProduct.emit({
        titleOfProduct: this.expenses.titleOfProduct,
        costOfProduct: this.expenses.costOfProduct
      });
      this.checkCost = false;
    }
  }

}
