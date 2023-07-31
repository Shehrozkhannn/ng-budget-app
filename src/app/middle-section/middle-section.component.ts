import { Component, OnInit, Input } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-middle-section',
  templateUrl: './middle-section.component.html',
  styleUrls: ['./middle-section.component.scss']
})
export class MiddleSectionComponent implements OnInit {
  totalBudget:any;
  obs: Subscription; 
  @Input() sum:any=0;
  balance:any;

  constructor(private _budgetService:BudgetService) {
    this.obs = this._budgetService.getAmount().subscribe((val:any)=>{
    console.log(val)
    this.totalBudget = val;
   })
   }

  ngOnInit(): void {
    console.log(this.balance)
  
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
}
