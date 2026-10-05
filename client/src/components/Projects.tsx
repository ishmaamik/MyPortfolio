import { projects } from '@/data/projects';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type ProjectsData = {
  id: number;
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  deployUrl?: string;
};

export default function Projects() {
  const projectList: ProjectsData[] = projects;
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
      <div className="w-full pb-10 text-center sm:p-12 xl:p-36">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Projects</h2>
      </div>

      <div className="mx-auto w-full max-w-3xl px-4 pb-12 xl:hidden">
        <div className="space-y-18">
          {projectList.map((project) => (
              <article key={project.id}>
                <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#1f243f]/90 p-4 shadow-lg sm:p-6">
                  <img src={project.image} alt="" className="mb-4 h-auto max-h-64 w-full rounded-xl object-contain" />
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{project.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-gray-200 sm:text-base">
                    {project.description.split('\n\n').map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    <Link href={project.githubUrl} className="inline-flex items-center font-semibold text-blue-300">
                      Github Link <ChevronRight aria-hidden="true" />
                    </Link>
                    {project.deployUrl && (
                      <Link href={project.deployUrl} className="inline-flex items-center font-semibold text-blue-300">
                        Deploy Link <ChevronRight aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
          ))}
        </div>
      </div>

      <div ref={desktopRef} className="relative hidden h-[170vh] xl:block">
        <div className="sticky flex items-start justify-center">
          <div className="relative h-[1000px] w-[10px] bg-gray-300">
            <div className="absolute left-0 top-0 h-full w-full bg-gray-300" />
            <div
              className="absolute left-0 top-0 w-full bg-red-400 transition-all duration-100 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
            {projectList.map((project, index) => {
              const position = (index / (projectList.length - 1 || 1)) * 100;
              const isActive = scrollProgress >= position;
              return (
                <div
                  key={project.id}
                  className={`absolute left-1/2 z-10 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white transition-colors duration-300 ${isActive ? 'bg-red-500' : 'bg-gray-300'}`}
                  style={{ top: `${position}%` }}
                >
                  <span className={`absolute ${project.id % 2 ? 'right-30' : 'left-30'} flex h-[400px] w-[600px] flex-col items-center gap-3 rounded text-sm font-medium whitespace-nowrap`}>
                    <img src={project.image} alt="" className="rounded-2xl" />
                    <p className="text-[20px] font-semibold text-white">{project.title}</p>
                    {project.description.split('\n\n').map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex} className="break-words text-wrap text-[18px] font-semibold text-white">
                        {paragraph}
                      </p>
                    ))}
                    <Link href={project.githubUrl} className="flex items-center text-[20px] font-semibold text-white">
                      Github Link <ChevronRight />
                    </Link>
                    {project.deployUrl && (
                      <Link href={project.deployUrl} className="flex items-center text-[20px] font-semibold text-white">
                        Deploy Link <ChevronRight />
                      </Link>
                    )}
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
