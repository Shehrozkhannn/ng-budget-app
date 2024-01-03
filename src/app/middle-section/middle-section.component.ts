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
  @Input() deletedItemCost:any=0;
  @Input() sum:any=0;
  @Input() totalBalance:any;
  balance:any;
  // test
  constructor(private _budgetService:BudgetService) {
    this.obs = this._budgetService.getAmount().subscribe((val:any)=>{
    this.totalBudget = val;
   })
   }

  ngOnInit(): void {  
  }
  ngOnDestroy() {
    this.obs.unsubscribe();
  }
}
