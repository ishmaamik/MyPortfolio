import { achievements } from '@/data/achievements';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

type AchievementsData = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export default function Achievements() {
  const achievementList: AchievementsData[] = achievements;
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on the container's position
      const containerTop = rect.top;
      const containerHeight = rect.height;

      // Start: when container top hits top of viewport (enters view)
      // End: when container bottom hits bottom of viewport (exits view)
      const startPoint = windowHeight;
      const endPoint = windowHeight - containerHeight;

      const progress = ((startPoint - containerTop) / (startPoint - endPoint)) * 100;

      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className='w-full p-20'>
        <p className='text-white text-5xl font-semibold'>Achievements</p>
      </div>
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="flex justify-center items-start  sticky ">
          <div
            className="bg-gray-300 h-[2500px] w-[10px] relative"
          >
            {/* Progress bar background */}
            <div className="bg-gray-300 h-full w-full absolute top-0 left-0"></div>

            {/* Progress bar fill */}
            <div
              className="bg-green-300 w-full transition-all duration-100 ease-out absolute top-0 left-0"
              style={{ height: `${scrollProgress}%` }}
            ></div>

            {/* Dynamic circles */}
            {achievementList.map((project, index) => {
              const position = (index / (achievementList.length - 1 || 1)) * 100;
              const isActive = scrollProgress >= position;

              return (
                <div
                  key={project.id}
                  className={`absolute left-1/2 transform  -translate-x-1/2 -translate-y-1/2 rounded-full h-6 w-6 border-4 border-white transition-colors duration-300 z-10 ${isActive ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  style={{ top: `${position}%` }}
                >
                  <span className={`absolute ${project.id % 2 ? `right-30 h-[400px]` : `left-30  h-[400px]`} whitespace-nowrap flex flex-col pb-[40px] items-center gap-10 text-sm font-medium   rounded  w-[600px]`}>
                    <img src={project.image} alt=""  className='rounded-2xl' />
                    <p className='text-white text-[20px] font-semibold'>{project.title}</p>
                    <p className='break-words text-white font-semibold text-[18px] text-wrap line-clamp-auto '>{project.description}</p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}