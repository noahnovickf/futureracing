import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export async function fetchSponsors() {
  const sponsorsCollection = collection(db, 'sponsors');
  const snapshot = await getDocs(sponsorsCollection);

  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      description: data.description || '',
      imgSrc: data.imgSrc || '',
      name: data.name || '',
    };
  });
}

export interface Sponsor {
  id: string;
  imgSrc: string;
  description: string;
  name: string;
}
