import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetSectionComponent } from './budget-section/budget-section.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MiddleSectionComponent } from './middle-section/middle-section.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    BudgetSectionComponent,
    ExpensesComponent,
    MiddleSectionComponent,
    ExpenseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
