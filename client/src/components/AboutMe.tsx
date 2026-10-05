import { Briefcase, Trophy } from "lucide-react"
import Image from "next/image";

export default function AboutMe() {
    const achievements = [
        { number: "200+", title: "Problems Solved", icon: "/leetcode.svg" },
        { number: "10+", title: "Projects Completed", icon: <Briefcase /> },
        { number: "5+", title: "Competitions Participated", icon: <Trophy /> },
        { number: "10+", title: "Articles Written", icon: "medium.svg" }
    ]

    return (
        <section className="flex w-full flex-col items-center justify-center px-4 py-12 text-center text-white sm:px-8 lg:min-h-screen lg:px-10 lg:py-12" aria-labelledby="about-heading">

            <div className="w-full max-w-4xl">
                <h2 id="about-heading" className="pb-6 text-3xl font-semibold sm:pb-10 sm:text-5xl">
                    About Me
                </h2>

                <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-300 sm:text-2xl md:text-3xl lg:text-4xl">
                    Previously worked as a Software Engineering Intern at RedDot Digital Limited
                </p>
            </div>

            <div className="mt-8 grid w-full max-w-5xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:gap-10">
                {achievements.map((p, index) => (
                    <div
                        key={index}
                        className="flex min-h-40 flex-col items-center justify-center rounded-2xl bg-[#1f243f] p-5 sm:min-h-48 sm:p-6"
                    >
                        <div className="text-blue-400 [&_svg]:h-8 [&_svg]:w-8">
                            {typeof p.icon === "string" ? (
                                <Image src={p.icon} alt="" width={40} height={40} className="h-10 w-10" />
                            ) : (
                                p.icon
                            )}
                        </div>

                        <p className="pt-3 text-4xl font-semibold sm:text-5xl">
                            {p.number}
                        </p>

                        <p className="pt-2 text-lg sm:text-xl lg:text-2xl">
                            {p.title}
                        </p>
                    </div>
                ))}
            </div>

        </section>
    )
}