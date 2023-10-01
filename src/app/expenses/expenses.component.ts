import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Subscription } from 'rxjs';
import {Toast} from 'bootstrap'
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  // titleOfProduct:any;
  // costOfProduct:any;
  @Output() detailsOfProduct = new EventEmitter<any>();
  @Output() tickIcon = new EventEmitter<any>();
  showIcon:boolean = true;
  totalBudget: any;
  obs: Subscription;
  expenses = {
    titleOfProduct: '',
    costOfProduct: 0,
  }
  checkCost: boolean = false;

  constructor(private _budgetService: BudgetService) {
    this.obs = this._budgetService.getAmount().subscribe((val: any) => {
      this.totalBudget = val;
    })

  }

  @ViewChild('myToast',{static:true}) toastEl: any
  isClosed(){
    return !this.toastEl.nativeElement.classList.contains('show')
  }
  toast:any
  ngOnInit(): void {
    this.toast=new Toast(this.toastEl.nativeElement,{})
  }
  checkAmount() {
    if (this.totalBudget <= 0) {
      return !this.toastEl.nativeElement.classList.contains('show');
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
      this.tickIcon.emit(this.showIcon)
      this.checkCost = false;
    }
    this.expenses.costOfProduct = 0;
    this.expenses.titleOfProduct =''
  }

}
