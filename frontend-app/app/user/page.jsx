'use client';
import { useEffect, useState } from 'react';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function UserPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);

    });

    return () => unsubscribe();
  }, []);

  if (!user) {

    return <div className="p-4">Loading user info...</div>;

  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-gray-100 p-4 rounded">
        <p className="text-lg"><strong>Email:</strong> <span className="text-blue-700">{user.email}</span></p>
        <p className="text-sm text-gray-600 mt-2"><strong>UID:</strong> {user.uid}</p>

      </div>
      
    </div>
  );
}
