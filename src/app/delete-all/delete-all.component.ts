import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.scss']
})
export class DeleteAllComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  public dialogRef: MatDialogRef<DeleteAllComponent>
  ) { }

  ngOnInit(): void {
  }
  deleteAll(){
    // console.log(this.data);
    // let checkAllTrue = this.data.every((check:any)=>{
    //    return check.isSelected == true
    // })
    // let checkAllFalse = this.data.every((check:any)=>{
    //   return check.isSelected == false
    // })
    // if(checkAllTrue || checkAllFalse){
    //   this.data.splice(0, this.data.length);
    // }
    // else{
    //  this.data = this.data.filter((val:any)=>{
    //     return val.isSelected == true;
    //   })
      // this.data.splice(0,this.data)
      this.dialogRef.close({
        updatedExpenseListAfterDeletion:this.data
      })
        }
        // if(this.data.length === 0){
        //   this.selectAll = false;
        // }
  }
