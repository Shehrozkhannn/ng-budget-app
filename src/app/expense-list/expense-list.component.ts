import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EditListSectionComponent } from '../edit-list-section/edit-list-section.component';
import { MatDialog } from '@angular/material/dialog';

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
  constructor(public dialog: MatDialog) {
  }
  
  ngOnInit(): void {
  }
  selectAllExpense(){
    this.allChecked ? this.selectAll = true : this.selectAll = false
  }
  selectIndividualExpense(checkbox:any){
    this.allChecked = this.expenseList.every((val:any)=>{
     return val.isSelected == true;
    })
    this.selectAllExpense();
  }
  removeItem(index:any){
   const deletedItem = this.expenseList.splice(index,1)
   this.priceOfProduct.emit(deletedItem);
  } 
  openEditDialog(editedItemVal:any){
    console.log(editedItemVal);
    this.dialog.open(EditListSectionComponent,{
      panelClass:'edit-expense',
      data:editedItemVal
    });
  }
}
