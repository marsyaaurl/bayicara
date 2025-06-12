import { notFound } from 'next/navigation';
import HeaderStimulasi from '@/app/components/HeaderStimulasi';
import NavbarLoggedin from '@/app/components/NavbarLoggedin';
import Footer from '@/app/components/Footer';
import ClientStoryGenerator from '@/app/components/ClientStoryGenerator';
import { milestone } from '@/app/milestone';
import MilestoneCard from '@/app/components/MilestoneCard';

interface PageProps {
  params: Promise<{
    milestone_id: string;
  }>;
}

const DetailedMilestonePage = async ({ params }: PageProps) => {
  const resolvedParams = await params;

  const currentMilestone = milestone.find(
    (item) => item.milestone_id === Number(resolvedParams.milestone_id)
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
        </div>

        <ClientStoryGenerator milestone={currentMilestone} />
      </div>
      <Footer />
    </div>
  );
};

export default DetailedMilestonePage;

