import { education } from '@/data/education';
import { useState, useRef } from 'react';

export type EducationData = {
    id: number;
    title: string;
    date: string;
    result?: string;
    school:string;
    imageUrl: string;
  };

export default function Education() {
    const educationList: EducationData[] = education;
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const maxScroll = container.scrollWidth - container.clientWidth;
        setScrollProgress(maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0);
    };

    return (
        <>
            <div className='justify-center items-center text-center w-full p-10'>
                <p className='text-white text-5xl font-semibold'>Education</p>
            </div>
            <div
                ref={containerRef}
                onScroll={handleScroll}
                className="relative w-full overflow-x-auto overflow-y-hidden px-6 py-8 scroll-smooth snap-x snap-mandatory"
            >
                <div className="relative mx-auto flex w-max items-stretch gap-8 px-4">
                    <div className="absolute top-1/2 h-1 -translate-y-1/2 bg-gray-300"
                        style={{ left: 'calc(1rem + min(62.5vw, 30px))', right: 'calc(1rem + min(42.5vw, 30px))' }}
                    >
                        <div
                            className="h-full bg-blue-300 transition-[width] duration-100 ease-out"
                            style={{ width: `${scrollProgress}%` }}
                        />
                    </div>
                    {educationList.map((item, index) => {
                        const position = (index / (educationList.length - 1 || 1)) * 100;
                        const isActive = scrollProgress >= position;
                        const details = (
                            <div className="flex aspect-square w-[320px] max-w-full flex-col gap-2 overflow-y-auto rounded-2xl border border-white/15 bg-white/5 p-5">
                                <p className="text-xl font-semibold text-white">{item.school}</p>
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="whitespace-normal break-words text-base font-medium text-white">{item.date}</p>
                                {item.result && <p className="text-lg font-semibold text-white">{item.result}</p>}
                            </div>
                        );

                        return (
                            <article
                                key={item.id}
                                className="relative z-10 grid w-[min(85vw,400px)] shrink-0 snap-center grid-rows-[minmax(320px,auto)_24px_minmax(320px,auto)]"
                            >
                                <div className={`flex justify-center py-6 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                                    {index % 2 === 0 ? (
                                        <img src={item.imageUrl} alt={item.school} className="h-auto max-w-full rounded-2xl object-contain" />
                                    ) : details}
                                </div>
                                <div
                                    className="mx-auto h-6 w-6 rounded-full border-4 border-white transition-colors duration-300"
                                    style={{ backgroundColor: isActive ? '#3b82f6' : '#d1d5db' }}
                                />
                                <div className={`flex justify-center py-6 ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                                    {index % 2 === 0 ? (
                                        details
                                    ) : (
                                        <img src={item.imageUrl} alt={item.school} className="h-auto max-w-full rounded-2xl object-contain" />
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </>
    );
}