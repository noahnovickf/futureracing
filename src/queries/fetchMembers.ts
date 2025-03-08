import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export async function fetchMembers() {
  const membersCollection = collection(db, 'members');
  const snapshot = await getDocs(membersCollection);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      category: data.category || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      role: data.role || '',
      description: data.description || '',
      image: data.image || '',
    };
  });
}

export interface Member {
  id: string;
  category: number;
  firstName: string;
  lastName: string;
  image?: string;
  description: string;
  role: string;
}
