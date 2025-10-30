import { Badge, Briefcase, Code } from "lucide-react"


export default function AboutMe() {

    const achievements=[
        {number: '100+', title:'Problems Solved', icon:<Badge/>},
        {number:'10+', title:'Projects Completed', icon:<Briefcase/>},
        {number:'5+', title:'Competitions Participated', icon:<Code/>}
    ]
    return (
        <>
            <div className="flex p-20 gap-60 h-[600px] text-white justify-center">
                <div className="flex flex-col">
                    <div>
                        <p className="text-5xl font-semibold pb-10">About Me</p>
                    </div>
                    <div className="">
                        <p className="text-4xl w-[500px] text-gray-300">Currently working as a Software Engineering Intern at RedDot Digital Limited</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-20">
                    {
                        achievements.map((p, index)=>(
                            <div key={index} className="bg-[#1f243f] h-[200px] w-full rounded-2xl pb-[20px] flex flex-col text-center justify-center items-center">
                                <div className="text-blue-400 w-full  pt-[15px] flex justify-center">{p.icon}</div>
                                <p className="text-5xl font-semibold  pt-[15px]">{p.number}</p>
                                <p className="flex text-3xl  pt-[15px]">{p.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}