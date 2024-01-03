import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Budget } from './model/budget';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs: AngularFirestore) { }


  addBudget(budget:Budget){
    budget.id = this.afs.createId();
    return this.afs.collection('/Budget').add(budget);
  }
}
