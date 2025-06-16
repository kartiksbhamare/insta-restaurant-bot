import { 
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export class FirebaseService {
  private collectionName: string;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  // Get all documents from a collection
  async getAll() {
    try {
      const querySnapshot = await getDocs(collection(db, this.collectionName));
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error getting documents:', error);
      throw error;
    }
  }

  // Add a new document
  async create(data: any) {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), data);
      return {
        id: docRef.id,
        ...data
      };
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  }

  // Update a document
  async update(id: string, data: any) {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, data);
      return {
        id,
        ...data
      };
    } catch (error) {
      console.error('Error updating document:', error);
      throw error;
    }
  }

  // Delete a document
  async delete(id: string) {
    try {
      await deleteDoc(doc(db, this.collectionName, id));
      return id;
    } catch (error) {
      console.error('Error deleting document:', error);
      throw error;
    }
  }

  // Query documents
  async query(field: string, operator: any, value: any) {
    try {
      const q = query(
        collection(db, this.collectionName),
        where(field, operator, value)
      );
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error querying documents:', error);
      throw error;
    }
  }
} 