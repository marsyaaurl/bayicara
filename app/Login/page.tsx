'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import NavbarNonLogin from "../components/NavbarNonLogin";

export default function Login() {
   const router = useRouter();

   const [data, setData] = useState({
       email: '',
       password: ''
   });

   const login = async () => {
       if (!data.email || !data.password) {
           alert('Mohon isi email dan password!');
           return;
       }

       try {
            const { data: sessionData, error } = await supabase.auth.signInWithPassword({
               email: data.email,
               password: data.password
           });

           if (error) {
               console.error('Error logging in:', error.message);
               alert(`Login gagal: ${error.message}`);
               return;
           }

           if (sessionData.session) {
               console.log('Login successful:', sessionData);
               alert('Login berhasil!');
               // Arahkan ke root
               router.push('/stimulasi');
           } else {
               alert('Login gagal, periksa kembali email dan password Anda.');
           }
       } catch (error) {
           console.error('An unexpected error occurred:', error);
           alert('Terjadi kesalahan yang tidak terduga.');
       }
   };

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
       const { name, value } = e.target;
       setData(prev => ({
           ...prev,
           [name]: value,
       }));
   };

   return (
       <>
       <NavbarNonLogin />
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
           <div className="p-8 bg-white rounded-2xl shadow-md w-96">
               <h1 className="text-2xl font-bold mb-4 text-center">Masuk</h1>
               <div className='gap-y-1 flex flex-col'>
                    <h3 className='font-semibold'>Email</h3>
                    <input
                        type="email"
                        name="email"
                        placeholder="Masukkan Email"
                        value={data.email}
                        onChange={handleChange}
                        className="mb-2 p-2 w-full border border-gray-300 rounded-xl"
                    />
                </div>
               <div className='gap-y-1 flex flex-col'>
                    <h3 className='font-semibold'>Password</h3>
                    <input
                        type="password"
                        name="password"
                        placeholder="Masukkan Password"
                        value={data.password}
                        onChange={handleChange}
                        className="mb-4 p-2 w-full border border-gray-300 rounded-xl"
                    />
                </div>
               <button
                   onClick={login}
                   className="w-full font-semibold bg-primary text-white px-4 py-2 rounded-xl hover:bg-secondary"
               >
                   Masuk
               </button>
           </div>
       </div>
       </>
   );
}