import { education } from '@/data/education';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

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
                <p className='text-white text-5xl font-semibold'>Education</p>
            </div>
            <div ref={containerRef} className="h-[200vh] relative">
                <div className="flex justify-center items-start  sticky ">
                    <div
                        className="bg-gray-300 h-[1000px] w-[10px] relative"
                    >
                        {/* Progress bar background */}
                        <div className="bg-gray-300 h-full w-full absolute top-0 left-0"></div>

                        {/* Progress bar fill */}
                        <div
                            className="bg-blue-300 w-full transition-all duration-100 ease-out absolute top-0 left-0"
                            style={{ height: `${scrollProgress}%` }}
                        ></div>

                        {/* Dynamic circles */}
                        {educationList.map((education, index) => {
                            const position = (index / (educationList.length - 1 || 1)) * 100;
                            const isActive = scrollProgress >= position;

                            return (
                                <div
                                    key={education.id}
                                    className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-6 w-6 border-4 border-white transition-colors duration-300 z-10 ${isActive ? 'bg-blue-500' : 'bg-gray-300'
                                        }`}
                                    style={{ top: `${position}%` }}
                                >
                                    <span className={`absolute ${education.id % 2 ? `right-50 h-[400px]` : `left-50  h-[400px]`} gap-2 whitespace-nowrap flex flex-col   text-sm font-medium  rounded  w-[400px]`}>
                                        <img src={education.imageUrl} alt="" className='rounded-2xl w-[250px]' />
                                        <p className='text-white text-[20px] font-semibold'>{education.school}</p>
                                        <p className='text-white text-[18px] font-semibold'>{education.title}</p>
                                        <p className='break-words text-white font-semibold text-[18px] text-wrap line-clamp-auto '>{education.date}</p>
                                        <p className='text-white text-[18px] font-semibold flex items-center'>{education.result}</p>
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