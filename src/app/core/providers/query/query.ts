import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, setDoc, doc, getDoc } from '@angular/fire/firestore';

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
      await addDoc(reference, data);
    } catch (error) {
      throw error;
    }

  }

  async set(collectionName: string, uid: string, data: any) {
    try {
    const reference = doc(this.fstr, collectionName, uid);
    await setDoc(reference, data);  
    } catch (error) {
      throw error;
    }
  }

  async get(collectionName: string, uid: string): Promise<any> {
    try {
      const reference = doc(this.fstr, collectionName, uid);
      const data = await getDoc(reference);
      console.log(data);
    } catch (error) {
      
    }
  }
  
}
