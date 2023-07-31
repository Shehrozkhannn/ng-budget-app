import { Injectable } from '@angular/core';

import {BehaviorSubject,Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private _amountVal = new BehaviorSubject<any>(0);
  private amountVal$ = this._amountVal.asObservable();

  getAmount():Observable<any>{
    return this.amountVal$;

  }

  setAmount(setVal:any){
    this._amountVal.next(setVal)
  }
  constructor() { }
}
