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

    const prompt = `...`; // biarkan ini tetap seperti punyamu tadi

    const generateText = async () => {
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
        <div className="p-4 sm:p-6 md:p-10">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">Buat Cerita</h1>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-center sm:items-start sm:justify-start gap-4">
                    <Brain className="w-14 h-14 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base text-gray-700 text-start sm:text-left">
                        Yuk, bantu Si Kecil lebih aktif berbicara lewat cerita-cerita pendek yang seru. Buat dan gunakan cerita pendek untuk bermain dan stimulasi kemampuan bicara anak bersama.
                    </p>
                </div>

                <textarea 
                    placeholder="Masukkan kata kunci tambahan."
                    value={userKeywords}
                    onChange={(e) => setSetUserKeywords(e.target.value)}
                    className="w-full text-[12px] p-3 h-24 border border-gray-300 rounded-lg sm:text-sm resize-none"
                />

                <button
                    onClick={generateText}
                    className="w-full sm:w-fit px-6 py-2 bg-secondary text-background font-semibold rounded-lg hover:opacity-90 transition"
                >
                    Buat Cerita
                </button>

                {output && (
                    <div className="mt-4 bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-800 whitespace-pre-wrap">
                        {output}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientStoryGenerator;
