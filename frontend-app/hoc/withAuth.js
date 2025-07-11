'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import '../firebase'; 


  return 
    function ProtectedComponent(props) {
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const auth = getAuth();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) { router.push('/login'); } else {setLoading(false);}
      });

      return () => unsubscribe();
    }, [auth, router]);

    if (loading) {return <div className="p-4 text-gray-500">Loading...</div>; }

    return <Component {...props} />;
  };

  export default withAuth;

