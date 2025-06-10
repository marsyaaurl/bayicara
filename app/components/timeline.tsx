'use client'

import { CheckSquare } from 'lucide-react';
import { milestone as initialMilestone } from '../milestone';
import Link from 'next/link';

const TimelineStimulasi = () => {
  const milestone = initialMilestone;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Timeline container */}
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="relative">
          {/* Milestone items */}
          {milestone.map((item) => (
            <div key={item.milestone_id} className="relative flex items-start mb-8 last:mb-0">
              {/* Icon */}
              <div
                className={`z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${
                  item.status ? 'bg-primary text-white' : 'bg-gray-400 text-white'
                }`}
              >
                <CheckSquare className="w-9 h-9 bg-transparent" />
              </div>

              {/* Content */}
              <div className="ml-10 flex-1">
                {/* Date Badge */}
                <div className="inline-block bg-[#D8FCF2] text-primary px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {item.usia} Bulan
                </div>

                {/* Card with green left strip */}
                <div
                  className={`flex rounded-2xl shadow-md overflow-hidden ${
                    item.status ? 'bg-white border border-gray-200' : 'bg-[#ebfcf7] border border-primary'
                  }`}
                >
                  {/* Green strip on the left */}
                  <div className="w-2 bg-primary rounded-l-2xl"></div>

                  {/* Card content */}
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{item.desc}</p>
                    <Link href={`/stimulasi/${item.milestone_id}`}>
                      <button className="py-2 px-4 rounded-lg text-white text-sm font-medium bg-primary hover:bg-[#8CEDE4]">
                        Lihat Detail
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineStimulasi;
