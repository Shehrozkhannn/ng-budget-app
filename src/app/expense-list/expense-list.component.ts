import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit {
  @Input() expenseList : any = [];
  selectAll:Boolean = false;
  allChecked:any;
  constructor() {
  }
  
  ngOnInit(): void {
    // this.expenseList.push(this.expenseListVal);
    // console.log(this.expenseList);
  }
  selectAllExpense(){
    this.allChecked ? this.selectAll = true : this.selectAll = false
    // if(this.allChecked){
    //   this.selectAll = true; 
    // }else{
    //   this.selectAll = false;
    // }
  }
  selectIndividualExpense(checkbox:any){
    console.log(this.expenseList);
    this.allChecked = this.expenseList.every((val:any)=>{
     return val.isSelected == true;
    })
    this.selectAllExpense();
    // console.log(allChecked)
  } 
}
