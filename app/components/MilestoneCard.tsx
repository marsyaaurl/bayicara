'use client';

interface Milestone {
  milestone_id: number;
  usia: string;
  title: string;
  desc: string;
  status: boolean;
  target?: string[];
  tips?: string[];
}

export default function MilestoneCard({ milestone }: { milestone: Milestone }) {

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6 border border-gray-200">
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Age badge */}
        <div className="bg-primary text-white px-4 py-3 rounded-xl flex flex-col items-center justify-center min-w-[100px]">
          <div className="text-xl font-bold bg-transparent">{milestone.usia}</div>
          <div className="text-sm bg-transparent">Bulan</div>
        </div>

        {/* Title and subtitle */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{milestone.title}</h3>
          <p className="text-sm text-gray-600">{milestone.desc}</p>
        </div>
      </div>

      {/* Target section */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Target</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {milestone.target?.map((item, index) => (
            <li key={index}>{item}</li>
          )) || <li>-</li>}
        </ul>
      </div>

      {/* Tips section */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">Tips</h4>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {milestone.tips?.map((item, index) => (
            <li key={index}>{item}</li>
          )) || <li>-</li>}
        </ul>
      </div>
    </div>
  );
}
