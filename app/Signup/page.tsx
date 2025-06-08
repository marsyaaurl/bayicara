'use client';
import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import NavbarNonLogin from "../components/NavbarNonLogin";

// Tidak ada lagi import useRouter

export default function Signup() {
    // Tidak ada lagi const router = useRouter();

    const [data, setData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const signup = async () => {
        if (!data.email || !data.password || !data.name) {
            alert('Mohon isi semua field!');
            return;
        }

        try {
            let { data: user, error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        name: data.name
                    },
                    // Opsi ini tetap berguna untuk mengarahkan setelah verifikasi email
                    emailRedirectTo: `${window.location.origin}/Login`
                }
            });

            if (error) {
                console.error('Error signing up:', error.message);
                alert(`Error: ${error.message}`);
            } else {
                // PESAN ALERT DIUBAH
                alert('Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.');
                
                // Form tetap dikosongkan agar pengguna bisa mendaftarkan akun lain jika perlu
                setData({ email: '', name: '', password: '' });

                // Baris router.push('/login') telah DIHAPUS
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

    // Bagian return JSX tidak ada perubahan
    return (
        <>
        <NavbarNonLogin />
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <div className="p-8 bg-white rounded-2xl shadow-md w-96 gap-y-2 flex flex-col">
                <h1 className="text-2xl font-bold mb-4 text-center">Daftar</h1>
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
                    <h3 className='font-semibold'>Nama</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Masukkan Nama"
                        value={data.name}
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
                    onClick={signup}
                    className="w-full font-semibold bg-primary text-white px-4 py-2 rounded-xl hover:bg-secondary transition"
                >
                    Daftar
                </button>
            </div>
        </div>
        </>
    );
}