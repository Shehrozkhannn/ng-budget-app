import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-list-section',
  templateUrl: './edit-list-section.component.html',
  styleUrls: ['./edit-list-section.component.scss']
})
export class EditListSectionComponent implements OnInit {
  productName:any;
  productPrice:any;
  constructor(@Inject(MAT_DIALOG_DATA) public editedExpense: any,
  public dialogRef: MatDialogRef<EditListSectionComponent>
  ) {
    
   }

  ngOnInit(): void {
    console.log(this.editedExpense)
    this.productName = this.editedExpense.titleOfProduct;
    this.productPrice = this.editedExpense.costOfProduct;
  }
  updateExpenseList(){
    console.log(this.productName)
    this.dialogRef.close({
      productName: this.productName,
      productPrice: this.productPrice
    })
  }

}
