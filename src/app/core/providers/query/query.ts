import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, doc } from '@angular/fire/firestore';

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

  async set(collectionName: string, uid: string, data: any) {
    try {
    const newDoc = doc(this.fstr, collectionName, uid);
    await setDoc(newDoc, data);  
    } catch (error) {
      throw error;
    }
  }
  
}
