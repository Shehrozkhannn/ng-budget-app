import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  @Input() expenseList : any[] = [];
  constructor() {
  }
  
  ngOnInit(): void {
    // this.expenseList.push(this.expenseListVal);
    // console.log(this.expenseList);
  }

}
