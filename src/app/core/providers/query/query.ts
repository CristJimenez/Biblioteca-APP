import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class Query {

  constructor(
    private readonly fstr: Firestore,
  ) {}

  async create(collectionName: string, data: any) {
    try {
      const reference = collection(this.fstr, collectionName);
      const res = await addDoc(reference, data);
    } catch (error) {
      throw error;
    }
  }
  
}
