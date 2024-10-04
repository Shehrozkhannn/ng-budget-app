import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from "@angular/core";
import { EditListSectionComponent } from "../edit-list-section/edit-list-section.component";
import { MatDialog } from "@angular/material/dialog";
import { DeleteAllComponent } from "../delete-all/delete-all.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-expense-list",
  templateUrl: "./expense-list.component.html",
  styleUrls: ["./expense-list.component.scss"],
})
export class ExpenseListComponent implements OnInit, AfterViewInit {
  @Input() expenseList: Array<any> = [];
  @Input() checkIconStatus: any;
  selectAll: any;
  countChecks: number = 0;
  showDeleteBtnNumber: boolean = false;
  allChecked: any;
  @Output() priceOfProduct = new EventEmitter<any>();
  constructor(public dialog: MatDialog, private toastr: ToastrService) {}
  ngAfterViewInit() {
    console.log(this.expenseList);
  }
  ngOnInit(): void {
    console.log(this.expenseList);
    console.log(this.checkIconStatus);
  }
  selectAllExpense() {
    if (this.selectAll == false) {
      this.expenseList.map((val) => (val.isSelected = false));
    } else {
      this.expenseList.map((val) => (val.isSelected = true));
      this.showDeleteBtnNumber = false;
    }
    // console.log(this.expenseList)
  }
  selectIndividualExpense() {
    this.countChecks = 0;
    this.allChecked = this.expenseList.every((val: any) => {
      return val.isSelected == true;
    });
    this.allChecked ? (this.selectAll = true) : (this.selectAll = false);
    console.log(this.expenseList);
    this.expenseList.map((val) => {
      if (val.isSelected == true) {
        this.showDeleteBtnNumber = true;
        this.countChecks = this.countChecks + 1;
      } else {
        this.expenseList.every((value) => {
          if (value.isSelected == false) {
            this.showDeleteBtnNumber = false;
          }
        });
      }
    });
  }
  removeItem(index: any) {
    const deletedItem = this.expenseList.splice(index, 1);
    this.priceOfProduct.emit(deletedItem);
  }
  openEditDialog(editedItemVal: any, index: number) {
    console.log(editedItemVal);
    const dialogRef = this.dialog.open(EditListSectionComponent, {
      panelClass: "edit-expense",
      data: editedItemVal,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      this.expenseList.filter((val: any, indexSel: number) => {
        if (index == indexSel) {
          // return (val.titleOfProduct = result.productName);
          val.titleOfProduct = result.productName,
          val.costOfProduct = result.productPrice
          return val;
        }
      });
    });
  }
  deleteAll() {
    // this.expenseList.splice(0,this.expenseList.length);
    const dialogRef = this.dialog.open(DeleteAllComponent, {
      width: "550px",
      data: this.expenseList,
    });
    dialogRef.afterClosed().subscribe((res: any) => {
      if(res?.updatedExpenseListAfterDeletion) {
        this.expenseList = res.updatedExpenseListAfterDeletion;
        let checkAllTrue = this.expenseList.every((check: any) => {
          return check.isSelected == true;
        });
        let checkAllFalse = this.expenseList.every((check: any) => {
          return check.isSelected == false;
        });
        if (checkAllTrue || checkAllFalse) {
          this.expenseList.splice(0, this.expenseList.length);
        }else{
          //    this.expenseList = this.expenseList.filter((val:any)=>{
          // return val.isSelected == false;
         const selectedDeletedItems = this.expenseList.filter((vrl:any)=> vrl.isSelected == true);
         this.expenseList.splice(0,selectedDeletedItems.length)
        }
        console.log(res);
  
        this.showDeleteBtnNumber = false;
        if (!this.expenseList?.length) {
          this.selectAll = false;
        }
        this.toastr.success('Selected Items Deleted Successfully');
      }
    });
  }
}
