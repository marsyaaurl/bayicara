'use client';

import { useState } from 'react';
import { Brain } from 'lucide-react';

interface Props {
    milestone: {
        milestone_id: number;
        usia: string;
        title: string;
        desc: string;
        status: boolean;
        target: string[];
        tips: string[];
    } | undefined;
}

const ClientStoryGenerator = ({ milestone }: Props) => {
    const [output, setOutput] = useState<string | null>(null);
    const [userKeywords, setSetUserKeywords] = useState('');

    const prompt = `
    Anda adalah seorang penulis cerita anak yang kreatif dan ahli dalam perkembangan bahasa balita.
    Tuliskan sebuah **cerita pendek naratif yang sederhana, menarik, dan fokus** untuk anak usia ${milestone?.usia} bulan.

    **Tema Utama Cerita:** Melatih keterampilan bahasa spesifik: **"${milestone?.title}"**.
    Jadikan keterampilan ini sebagai **tujuan atau keinginan utama yang sangat jelas dari karakter** dalam cerita.

    **Detail Penting untuk Diintegrasikan dalam Cerita (Ambil dari data milestone):**
    * **Inti Keterampilan:** Gunakan deskripsi umum dari "${milestone?.desc}" sebagai esensi dari tujuan karakter dan apa yang ia pelajari.
    * **Target Spesifik:** Ceritakan bagaimana karakter **berusaha dan/atau berhasil** melakukan salah satu atau beberapa dari target-target spesifik ini: "${milestone?.target.join('; ')}". Gabungkan upaya atau keberhasilan ini secara mulus dalam alur cerita.
    * **Elemen Stimulasi (Tips):** Secara natural, sisipkan ide atau aktivitas yang terinspirasi dari tips stimulasi berikut ke dalam narasi atau interaksi karakter di dalam cerita: "${milestone?.tips.join('; ')}". Buat tips ini menjadi bagian alami dari lingkungan atau tindakan pendukung.
    ${userKeywords ? `* **Kata Kunci Tambahan dari Orang Tua:** Pastikan untuk menyertakan dan mengintegrasikan secara natural elemen-elemen atau konsep-konsep berikut dalam cerita: "${userKeywords}".` : ''}
    
    **Cerita harus memiliki:**
    1.  Tokoh utama (hewan, manusia, atau benda) yang lucu, menggemaskan, memiliki nama sederhana, dan mudah diidentifikasi oleh balita.
    2.  Alur cerita yang sangat sederhana:
        * **Awal:** Perkenalkan karakter dan keinginan kuatnya terkait keterampilan utama.
        * **Tengah:** Tunjukkan usaha/percobaan karakter dalam mencapai tujuan, dengan memasukkan target spesifik dari milestone.
        * **Akhir:** Karakter berhasil menguasai keterampilan tersebut dengan cara yang bahagia dan memuaskan.
    3.  Akhir cerita yang positif dan ceria.

    **PENTING (Gaya Bahasa & Larangan Keras):**
    -   **Pengulangan Kata Kunci:** Sisipkan **pengulangan kata atau frasa kunci** yang relevan dengan "${milestone?.title}" dan poin-poin dari **target spesifik** Anda secara **natural dalam narasi atau dialog karakter** untuk membantu stimulasi bahasa anak.
    -   Gunakan bahasa yang lembut, positif, dan mudah dipahami anak.
    -   **Fokus murni pada alur cerita naratif**, bukan pada panduan interaktif atau instruksi.
    -   **JANGAN** sertakan instruksi dalam kurung untuk orang tua (misalnya: "(Ulangi beberapa kali...)").
    -   **JANGAN** ada deskripsi gambar atau petunjuk visual (misalnya: "(Gambar: Bola merah)").
    -   Buat susunan ceritanya mudah dibaca juga oleh orang tua.
    -   Pertahankan cerita sebagai **narasi tunggal yang mengalir**, tanpa pemisahan paragraf eksplisit yang ketat, namun dengan alur yang jelas.
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
            <div className='flex flex-col justify-center gap-x-5'>
                <div className="flex flex-row sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-4">
                    <Brain className="w-14 h-14 text-primary bg-transparent flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 sm:text-left">
                        Yuk, bantu Si Kecil lebih aktif berbicara lewat cerita-cerita pendek yang seru. Buat dan gunakan cerita pendek untuk bermain dan stimulasi kemampuan bicara anak bersama.
                    </p>
                </div>
                <div>
                    <textarea 
                        placeholder='Masukkan kata kunci tambahan.'
                        value={userKeywords}
                        onChange={(e) => setSetUserKeywords(e.target.value)}
                        className='w-full text-[12px] sm:text-xs p-2 items-start justify-start h-20 border rounded-lg'
                    />
                    <button
                        onClick={generateText}
                        className='px-5 bg-secondary rounded-lg h-8 font-semibold mb-5 text-background hover:bg-primary'
                    >
                        Buat Cerita
                    </button>
                    {output && (
                        <div className='w-full'>
                            <p className='text-md text-gray-700'>{output}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClientStoryGenerator;
