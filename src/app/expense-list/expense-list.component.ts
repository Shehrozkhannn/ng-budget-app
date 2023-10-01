import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { EditListSectionComponent } from '../edit-list-section/edit-list-section.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteAllComponent } from '../delete-all/delete-all.component';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent implements OnInit , AfterViewInit {
  @Input() expenseList : Array<any> = [];
  @Input() checkIconStatus:any;
  selectAll:any;
  countChecks:number=0;
  showDeleteBtnNumber:boolean = false;
  allChecked:any;
  @Output() priceOfProduct = new EventEmitter<any>();
  constructor(public dialog: MatDialog) {
  }
  ngAfterViewInit(){
   
  }
  ngOnInit(): void {
    console.log(this.checkIconStatus);
  }
  selectAllExpense(){
    if(this.selectAll == false){
      this.expenseList.map((val)=>val.isSelected = false)
    }else{
      this.expenseList.map((val)=>val.isSelected = true)
      this.showDeleteBtnNumber = false;
    }


    // console.log(this.expenseList)

  }
  selectIndividualExpense(){
    this.countChecks = 0;
    this.allChecked  = this.expenseList.every((val:any)=>{
     return val.isSelected == true;
    })
    this.allChecked ? this.selectAll = true : this.selectAll = false;
    console.log(this.expenseList)
    this.expenseList.map((val)=>{
      if(val.isSelected == true){
        this.showDeleteBtnNumber = true;
        this.countChecks = this.countChecks + 1;
      }else{
        this.expenseList.every((value)=>{ 
          if(value.isSelected == false){
            this.showDeleteBtnNumber = false;
          }
          })
      }
    })
  }
  removeItem(index:any){
   const deletedItem = this.expenseList.splice(index,1)
   this.priceOfProduct.emit(deletedItem);
  } 
  openEditDialog(editedItemVal:any,index:number){
    console.log(editedItemVal);
    const dialogRef = this.dialog.open(EditListSectionComponent,{
      panelClass:'edit-expense',
      data:editedItemVal
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log(result);
      this.expenseList.filter((val:any,indexSel:number)=>{
        if(index == indexSel){
        return val.titleOfProduct = result.productName
        }
      })
    })
  }
  deleteAll(){
    // this.expenseList.splice(0,this.expenseList.length);
    const dialogRef = this.dialog.open(DeleteAllComponent,{
      width:'550px',
      data:this.expenseList
    });
  }
}
