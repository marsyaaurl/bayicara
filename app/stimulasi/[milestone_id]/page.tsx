import { notFound } from 'next/navigation';
import HeaderStimulasi from '@/app/components/HeaderStimulasi';
import NavbarLoggedin from '../../components/NavbarLoggedin';
import Footer from '../../components/Footer';
import ClientStoryGenerator from '../../components/ClientStoryGenerator';
import { milestone } from '../../milestone';
import MilestoneCard from '../../components/MilestoneCard';

interface PageProps {
  params: {
    milestone_id: string;
  };
}

const DetailedMilestonePage = ({ params }: PageProps) => {
  const currentMilestone = milestone.find(
    (item) => item.milestone_id === Number(params.milestone_id)
  );

  if (!currentMilestone) {
    notFound();
  }

  return (
    <div>
      <NavbarLoggedin />
      <HeaderStimulasi />
      <div className='mx-5 py-8 px-4'>
        <div className='flex gap-x-10 items-center justify-center mb-10'>
          <MilestoneCard milestone={currentMilestone} />

          <div className='flex flex-col gap-y-4 w-1/2'>
            <h2 className='font-semibold bg-transparent'>
              Ulangi {currentMilestone.title} Saat Berinteraksi
            </h2>
            <p>akjnckjsaadas</p>
          </div>
        </div>

        <ClientStoryGenerator milestone={currentMilestone} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailedMilestonePage;
