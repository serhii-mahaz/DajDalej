'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const [message, setMessage] = useState('');
  const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       router.push('/login');
//       return;
//     }

//     axios
//       .get('http://localhost:3000/protected', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       })
//       .then((res) => setMessage(res.data.message))
//       .catch(() => router.push('/login'));
//   }, [router]);

  return (
    <main className="flex items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">{message || 'Loading...'}</h2>
    </main>
  );
}
