import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetSectionComponent } from './budget-section/budget-section.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditListSectionComponent } from './edit-list-section/edit-list-section.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DeleteAllComponent } from './delete-all/delete-all.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetSectionComponent,
    ExpensesComponent,
    MiddleSectionComponent,
    ExpenseListComponent,
    EditListSectionComponent,
    DeleteAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
