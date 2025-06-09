import HeaderStimulasi from '@/app/components/HeaderStimulasi';
import NavbarLoggedin from '../../components/NavbarLoggedin';
import Footer from '../../components/Footer';
import ClientStoryGenerator from '../../components/ClientStoryGenerator';
import { milestone } from '../../milestone';
import { Baby } from 'lucide-react';

const DetailedMilestonePage = async ({ params }: { params: { milestone_id: string } }) => {
    const currentMilestone = milestone.find(
        (item) => item.milestone_id === Number(params.milestone_id)
    );

    return (
        <div>
            <NavbarLoggedin />
            <HeaderStimulasi />
            <div className='mx-5 py-8 px-4'>
                <div className='flex gap-x-10 items-center justify-center mb-10'>
                    <div className='w-1/2'>
                        <h1 className="text-xl font-bold mb-1">Target</h1>
                        <div className='flex bg-background rounded-xl shadow-lg px-5 py-6 gap-x-5 items-center justify-center'>
                            <div className='flex flex-col items-center justify-center gap-y-4 px-3 py-5 rounded-lg bg-secondary'>
                                <Baby className='w-16 h-16 text-background bg-transparent' />
                                <div className='flex flex-col items-center justify-center gap-y-0 bg-transparent'>
                                    <h3 className='bg-transparent text-background text-xl font-semibold'>{currentMilestone?.usia}</h3>
                                    <h4 className='bg-transparent text-background'>Bulan</h4>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h1 className='font-bold text-xl bg-transparent'>{currentMilestone?.title}</h1>
                                <p className='bg-transparent'>{currentMilestone?.desc}</p>
                                <button className='w-full bg-secondary rounded-md h-8 font-semibold text-background'>Berhasil</button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-4 w-1/2'>
                        <h1 className="text-xl font-bold mb-1">Tips</h1>
                        <div className='flex flex-col bg-background rounded-xl shadow-lg px-4 py-5 gap-y-2 justify-center'>
                            <h2 className='font-semibold bg-transparent'>Ulangi {currentMilestone?.title} Saat Berinteraksi</h2>
                            <p>akjnckjsaadas</p>
                        </div>
                        <div className='flex flex-col bg-background rounded-xl shadow-lg px-4 py-5 gap-y-2 justify-center'>
                            <h2 className='font-semibold bg-transparent'>Ulangi {currentMilestone?.title} Saat Berinteraksi</h2>
                            <p>akjnckjsaadas</p>
                        </div>
                    </div>
                </div>

                <ClientStoryGenerator milestone={currentMilestone} />
            </div>
            <Footer />
        </div>
    );
};

export default DetailedMilestonePage;
