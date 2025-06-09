'use client';

import { useState } from 'react';
import { Brain } from 'lucide-react';

interface Props {
    milestone: {
        usia: string;
        title: string;
    } | undefined;
}

const ClientStoryGenerator = ({ milestone }: Props) => {
    const [output, setOutput] = useState<string | null>(null);

    const prompt = `
    Anda adalah seorang penulis cerita anak yang kreatif. 
    Tuliskan sebuah **cerita pendek naratif** untuk anak usia ${milestone?.usia} bulan.

    Tema utama cerita ini adalah tentang melatih keterampilan: **"${milestone?.title}"**. 
    Jadikan keterampilan ini sebagai **tujuan atau keinginan utama dari karakter** dalam cerita. 
    Misalnya, jika keterampilannya adalah "Mengucapkan Mama Papa", ceritanya bisa tentang seekor anak burung yang sangat ingin memanggil induknya untuk pertama kali.

    Cerita harus memiliki:
    1. Tokoh hewan, manusia, atau benda yang lucu dan mudah diidentifikasi.
    2. Alur cerita yang sangat sederhana (awal, tengah, akhir).
    3. Akhir yang bahagia dan memuaskan.

    **PENTING:**
    - **JANGAN** sertakan instruksi dalam kurung untuk orang tua seperti "(Ulangi beberapa kali...)".
    - **JANGAN** ada deskripsi gambar seperti "(Gambar: Bola merah)".
    - **Fokus murni pada alur cerita**, bukan pada panduan interaktif.

    Gunakan bahasa yang lembut, positif, dan mudah dipahami anak minimal 3 paragraf.

    Buat susunan ceritanya mudah dibaca juga oleh orang tua
    `;

    const generateText = async () => {
        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: prompt }),
            });
            const data = await response.json();
            if (response.ok) {
                setOutput(data.output);
            } else {
                setOutput(data.error || 'Terjadi kesalahan.');
            }
        } catch (error) {
            console.error(error);
            setOutput('Gagal memuat cerita.');
        }
    };

    return (
        <div>
            <h1 className="text-xl font-bold mb-2">Buat Cerita</h1>
            <div className='flex justify-center gap-x-5'>
                <Brain className='w-16 h-16 text-primary bg-transparent' />
                <div>
                    <p className='mb-2'>
                        Yuk, bantu Si Kecil lebih aktif berbicara lewat cerita-cerita pendek yang seru. Buat dan gunakan cerita pendek untuk bermain dan stimulasi kemampuan bicara anak bersama.
                    </p>
                    <button
                        onClick={generateText}
                        className='px-5 bg-secondary rounded-lg h-8 font-semibold text-background'
                    >
                        Buat Cerita
                    </button>
                </div>
            </div>
            {output && (
                <div className='mt-4 p-4 bg-background rounded-lg shadow-md'>
                    <p>{output}</p>
                </div>
            )}
        </div>
    );
};

export default ClientStoryGenerator;
