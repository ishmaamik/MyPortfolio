import { achievements } from '@/data/achievements';
import { useEffect, useRef, useState } from 'react';

type AchievementsData = {
  id: number;
  title: string;
  description: string;
  contest?: string;
  image: string;
};

export default function Achievements() {
  const achievementList: AchievementsData[] = achievements;
  const [scrollProgress, setScrollProgress] = useState(0);
  const desktopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!window.matchMedia('(min-width: 1280px)').matches) return;
      const container = desktopRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const progress = ((window.innerHeight - top) / height) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="w-full pb-10 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Achievements</h2>
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 pb-10 xl:hidden">
        <div className="space-y-18 sm:space-y-8">
          {achievementList.map((achievement) => (
              <article key={achievement.id}>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#1f243f]/90 p-4 shadow-lg sm:p-6">
                  <img src={achievement.image} alt="" className="mb-4 h-auto max-h-64 w-full rounded-xl object-contain" />
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{achievement.title}</h3>
                  {achievement.contest && <p className="mt-1 font-medium text-green-300">{achievement.contest}</p>}
                  <p className="mt-3 text-sm leading-relaxed text-gray-200 sm:text-base">{achievement.description}</p>
                </div>
              </article>
          ))}
        </div>
      </div>

      <div ref={desktopRef} className="relative hidden h-[220vh] xl:block">
        <div className="sticky flex items-start justify-center">
          <div className="relative h-[1400px] w-[10px] bg-gray-300">
            <div className="absolute left-0 top-0 h-full w-full bg-gray-300" />
            <div
              className="absolute left-0 top-0 w-full bg-green-300 transition-all duration-100 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
            {achievementList.map((achievement, index) => {
              const position = (index / (achievementList.length - 1 || 1)) * 100;
              const isActive = scrollProgress >= position;
              return (
                <div
                  key={achievement.id}
                  className={`absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white transition-colors duration-300 ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}
                  style={{ top: `${position}%` }}
                >
                  <span className={`absolute ${achievement.id % 2 ? 'right-30' : 'left-30'} flex h-[400px] w-[600px] flex-col items-center gap-10 rounded pb-[40px] text-sm font-medium whitespace-nowrap`}>
                    <img src={achievement.image} alt="" className="rounded-2xl" />
                    <p className="text-[20px] font-semibold text-white">{achievement.title}</p>
                    <p className="break-words text-wrap text-[18px] font-semibold text-white">{achievement.description}</p>
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
