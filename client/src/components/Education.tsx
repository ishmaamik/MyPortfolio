import { education } from '@/data/education';
import Image from 'next/image';

export type EducationData = {
    id: number;
    title: string;
    date: string;
    result?: string;
    school: string;
    imageUrl: string;
};

export default function Education() {
    const educationList: EducationData[] = education;

    return (
        <section className=" w-full px-4 pb-12 sm:px-8 lg:pt-32 pt-10 lg:px-10" aria-labelledby="education-heading">
            <h2 id="education-heading" className="mb-10 text-center text-3xl font-semibold text-white sm:mb-12 sm:text-5xl">
                Education
            </h2>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-16 xl:grid-cols-3 xl:gap-12 2xl:max-w-7xl">
                {educationList.map((item) => (
                    <article key={item.id} className="overflow-hidden rounded-2xl border border-white/15 bg-[#1f243f]/90 shadow-lg shadow-black/10">
                        <div className="relative h-48 bg-white/5 p-4 sm:h-56">
                            <Image
                                src={`/${item.imageUrl.replace(/^\/+/, '')}`}
                                alt={item.school}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="p-4 sm:p-6">
                            <p className="text-sm font-semibold uppercase tracking-wide text-blue-300 sm:text-base">{item.school}</p>
                            <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
                            <p className="mt-3 break-words text-sm leading-relaxed text-gray-200 sm:text-base">{item.date}</p>
                            {item.result && <p className="mt-4 text-lg font-semibold text-white">{item.result}</p>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
