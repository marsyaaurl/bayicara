'use client';

import { useState } from 'react';
import { surveyQuestions as initialQuestions } from '../deteksi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SurveyDeteksi = () => {
    const question = initialQuestions;
    const [answer, setAnswer] = useState<{ [key: number]: string }>({});
    const [result, setResult] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async () => {
        const jawabanUser = Object.entries(answer)
            .map(([key, value]) => `Pertanyaan ${key}: ${value}`)
            .join('\n');

        const prompt = `
        Berikut adalah hasil survey deteksi speech delay dari pengguna:

        ${jawabanUser}

        Tolong analisis apakah anak ini menunjukkan gejala keterlambatan perkembangan atau tidak.

        Gunakan panduan interpretasi berikut:

        ### Interpretasi Hasil
        - Risiko Tinggi Speech Delay Jika:
        - Memilih lebih dari 3 opsi berisiko di bagian B, C, dan E
        - Jawaban di bagian D menunjukkan keterlambatan signifikan sesuai usia

        ### Rekomendasi:
        Konsultasikan ke ahli patologi wicara-bahasa jika ditemukan kondisi seperti:
        - Kosakata kurang dari 10 kata di usia 2 tahun
        - Tidak ada kalimat 2 kata di usia 2.5 tahun
        - Gangguan pemahaman terhadap instruksi sederhana

        Lalu, berikan saran singkat untuk orang tua tentang langkah selanjutnya.

        **Tampilkan hasil analisis langsung dalam format HTML yang rapi dan mudah dibaca di web (gunakan elemen seperti <h2>, <ul>, <p>, dan <strong>)**. Jangan pakai tag <html>, <head>, atau <body>. Cukup bagian isi yang siap ditampilkan.`;


        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();
            if (response.ok) {
                setResult(data.output);
                const encoded = encodeURIComponent(JSON.stringify(data.output));
                router.push(`/result?data=${encoded}`);
            } else {
                setResult(data.error || 'Terjadi kesalahan.');
            }
        } catch (error) {
            console.error(error);
            setResult('Gagal memuat hasil analisis.');
        }
    };

    console.log('Jawaban saat ini:', answer);


    return (
        <div className='flex flex-col items-start gap-y-8 p-10 w-full'>
            {question.map((item) => (
                <div className='w-full' key={item.question_id}>
                    <h4 className='text-gray-700'>
                        Pertanyaan {item.question_id} dari {question.length}
                    </h4>
                    <h3 className='font-semibold mb-2'>{item.question}</h3>
                    <div className='flex flex-col gap-y-2'>
                        {item.options.map((option, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-x-2 border rounded-xl bg-transparent p-2 ${
                                answer[item.question_id] === option.value ? 'border-primary border-2 text-white' : 'border-gray-300 bg-white'
                                }`}
                                onClick={() => {
                                    setAnswer((prev) => ({
                                    ...prev,
                                    [item.question_id]: option.value,
                                    }));
                                }}
                                >
                                <h3
                                    className={`rounded-full px-4 py-2 text-background ${
                                    answer[item.question_id] === option.value
                                        ? 'bg-primary'
                                        : 'bg-gray-300'
                                    }`}
                                >
                                    {String.fromCharCode(65 + index)}
                                </h3>
                                <h3 className='text-black'>{option.label}</h3>
                                </button>
                        ))}
                    </div>
                </div>
            ))}

            <Link href=""><button
                onClick={handleSubmit}
                className='bg-primary w-full rounded-lg text-background font-semibold px-3 py-2'
            >
                Submit
            </button></Link>
        </div>
    );
};

export default SurveyDeteksi;
