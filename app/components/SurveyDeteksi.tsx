'use client';

import { useState } from 'react';
import { surveyQuestions as initialQuestions } from '../deteksi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SurveyDeteksi = () => {
    const question = initialQuestions;
    const [answer, setAnswer] = useState<{ [key: number]: string }>({});
    const router = useRouter();

    const handleSubmit = async () => {
        const jawabanUser = Object.entries(answer)
            .map(([key, value]) => `Pertanyaan ${key}: ${value}`)
            .join('\n');

        const prompt = `
        Berikut adalah hasil survei deteksi dini speech delay dari pengguna:

        ${jawabanUser}

        Tolong analisis jawaban tersebut dan tentukan apakah anak menunjukkan tanda-tanda keterlambatan bicara atau tidak.

        Gunakan standar berikut untuk interpretasi:
        - Anak dianggap berisiko tinggi mengalami speech delay jika:
        1. Memilih lebih dari 3 opsi berisiko di bagian B, C, dan/atau E.
        2. Jawaban di bagian D menunjukkan keterlambatan signifikan berdasarkan usia.

        Rekomendasi untuk konsultasi ke ahli patologi wicara-bahasa jika:
        - Kosakata < 10 kata di usia 2 tahun
        - Tidak dapat membuat kalimat 2 kata di usia 2,5 tahun
        - Tidak memahami instruksi sederhana

        FORMAT OUTPUT YANG DIMINTA:
        - Jawaban dalam bentuk HTML rapi
        - Gunakan elemen seperti: <h2>, <h3>, <ul>, <ol>, <p>
        - Gunakan <strong> atau <em> bila perlu untuk menegaskan poin penting
        - Bahasa Indonesia

        Tampilkan hasil analisis dan rekomendasi sejelas dan seringkas mungkin.
        `;

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
                const encoded = encodeURIComponent(JSON.stringify(data.output));
                router.push(`/result?data=${encoded}`);
            } else {
                console.log(data.error || 'Terjadi kesalahan.');
            }
        } catch (error) {
            console.error(error);
            console.log('Gagal memuat hasil analisis.');
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
                            className={`flex gap-x-2 border items-center rounded-xl bg-transparent p-2 text-left ${
                                answer[item.question_id] === option.value
                                ? 'border-primary border-2 text-white'
                                : 'border-gray-300 bg-white'
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
                            <h3 className='text-black text-left'>{option.label}</h3>
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
