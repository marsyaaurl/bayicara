'use client';

import { useState } from 'react';
import { Baby } from 'lucide-react';

interface Milestone {
  milestone_id: number;
  usia: string;
  title: string;
  desc: string;
  status: boolean;
}

export default function MilestoneCard({ milestone }: { milestone: Milestone }) {
    const [isCompleted, setIsCompleted] = useState(milestone.status);

    const handleBerhasilClick = () => {
        console.log(`Milestone ${milestone.title} ditandai selesai!`);
        setIsCompleted(true);
    };

    return (
        <div className='w-1/2'>
            <h1 className="text-xl font-bold mb-1">Target</h1>
            <div className='flex bg-background items-center rounded-xl shadow-lg px-5 py-6 gap-x-5 justify-center'>
                <div className='flex flex-col items-center justify-center gap-y-4 px-3 py-5 rounded-lg bg-secondary'>
                    <Baby className='w-16 h-16 text-background bg-transparent' />
                    <div className='flex flex-col items-center justify-center gap-y-0 bg-transparent'>
                        <h3 className='bg-transparent text-background text-xl font-semibold'>{milestone?.usia}</h3>
                        <h4 className='bg-transparent text-background'>Bulan</h4>
                    </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='font-bold text-xl bg-transparent'>{milestone?.title}</h1>
                    <p className='bg-transparent'>{milestone?.desc}</p>
                    <button 
                        onClick={handleBerhasilClick} 
                        disabled={isCompleted}
                        className='w-full bg-secondary rounded-md h-8 font-semibold text-background disabled:bg-gray-400'
                    >
                        {isCompleted ? 'Sudah Berhasil' : 'Berhasil'}
                    </button>
                </div>
            </div>
        </div>
    );
}