'use client';

import React, { useState, Suspense } from 'react'; // Import Suspense
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';
import NavbarNonLogin from "../components/NavbarNonLogin";

// Create a separate component for the Login form that uses useSearchParams
function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const [isLoading, setIsLoading] = useState(false); // State untuk loading

    const login = async () => {
        if (!data.email || !data.password) {
            alert('Mohon isi email dan password!');
            return;
        }

        setIsLoading(true); // Mulai loading

        try {
            const { data: sessionData, error } = await supabase.auth.signInWithPassword({
                email: data.email,
                password: data.password
            });

            if (error) {
                console.error('Error logging in:', error.message);
                alert(`Login gagal: ${error.message}`); // Fix string interpolation
                return;
            }

            if (sessionData.session) {
                console.log('Login successful:', sessionData);
                alert('Login berhasil!');

                const next = searchParams.get('next') || '/stimulasi';
                router.push(next);
            } else {
                alert('Login gagal, periksa kembali email dan password Anda.');
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            alert('Terjadi kesalahan yang tidak terduga.');
        } finally {
            setIsLoading(false); // Selesai loading
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
                        disabled={isLoading} // Menonaktifkan input saat loading
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
                        disabled={isLoading} // Menonaktifkan input saat loading
                    />
                </div>
                <button
                    onClick={login}
                    className="w-full font-semibold bg-primary text-white px-4 py-2 rounded-xl hover:bg-secondary"
                    disabled={isLoading} // Menonaktifkan tombol saat loading
                >
                    {isLoading ? 'Memproses...' : 'Masuk'}
                </button>
            </div>
        </div>
    );
}

export default function Login() {
    return (
        <>
            <NavbarNonLogin />
            {/* Wrap LoginForm with Suspense */}
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </>
    );
}