import { Badge, Briefcase, Code } from "lucide-react"

export default function AboutMe() {
    const achievements = [
        { number: "200+", title: "Problems Solved", icon: "/leetcode.svg" },
        { number: "10+", title: "Projects Completed", icon: <Briefcase /> },
        { number: "5+", title: "Competitions Participated", icon: "hackathon.png" }
    ]

    return (
        <div className="min-h-screen w-full flex flex-col justify-center items-center text-white text-center">

            <div>
                <p className="text-5xl font-semibold pb-10">
                    About Me
                </p>

                <p className="text-4xl w-[500px] text-gray-300">
                    Currently working as a Software Engineering Intern at RedDot Digital Limited
                </p>
            </div>

            <div className="grid grid-cols-2 gap-20 mt-20">
                {achievements.map((p, index) => (
                    <div
                        key={index}
                        className="bg-[#1f243f] h-[200px] w-[400px] rounded-2xl flex flex-col justify-center items-center"
                    >
                        <div className="text-blue-400">
                            {typeof p.icon === "string" ? (
                                <img src={p.icon} alt={p.title} className="w-10 h-10" />
                            ) : (
                                p.icon
                            )}
                        </div>

                        <p className="text-5xl font-semibold pt-[15px]">
                            {p.number}
                        </p>

                        <p className="text-3xl pt-[15px]">
                            {p.title}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}