import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  @Input() expenseList : any = [];
  selectAll:Boolean = false;
  allChecked:any;
  @Output() priceOfProduct = new EventEmitter<any>();
  constructor() {
  }
  
  ngOnInit(): void {
  }
  selectAllExpense(){
    this.allChecked ? this.selectAll = true : this.selectAll = false
  }
  selectIndividualExpense(checkbox:any){
    console.log(this.expenseList);
    this.allChecked = this.expenseList.every((val:any)=>{
     return val.isSelected == true;
    })
    this.selectAllExpense();
  }
  removeItem(index:any){
   const deletedItem = this.expenseList.splice(index,1)
   this.priceOfProduct.emit(deletedItem);
  } 
}
