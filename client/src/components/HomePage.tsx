import Image from "next/image";
import { useEffect, useState } from "react";
import { GraduationCap, NotepadText, Trophy } from "lucide-react";

const aboutMe = [
    { icon: <GraduationCap />, text: "BSc in Software Engineering" },
    { icon: <Trophy />, text: "Hackathon Champion" },
    { icon: <Trophy />, text: "Project Showcase Winner" },
    { icon: <NotepadText />, text: "Content Writer" }
];

export default function HomePage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = aboutMe[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        const pauseTime = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentText.text.length) {
                    setDisplayText(
                        currentText.text.slice(0, displayText.length + 1)
                    );
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex(
                        (currentIndex + 1) % aboutMe.length
                    );
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentIndex]);

    return (
        <div className="relative min-h-screen w-full overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src="/me.jpeg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="h-full w-full object-cover object-[22%_center] sm:object-center md:scale-[1.02]"
                />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* Content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pb-10 pt-24 text-center sm:px-8">

                <p className="text-lg text-white sm:text-2xl">
                    Hi there! I am
                </p>

                <h1 className="mt-3 max-w-5xl break-words bg-gradient-to-r from-[#e1f1fb] via-[#a8d9fc] to-[#66bfff] bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                    Ishmaam Iftekhar Khan
                </h1>

                <p className="flex max-w-full items-center justify-center pt-6 text-xl text-white sm:text-2xl md:text-3xl">
                    <span className="mr-2 shrink-0">
                        {aboutMe[currentIndex].icon}
                    </span>

                    <span className="max-w-[calc(100vw-5rem)] break-words text-left sm:max-w-none">
                        {displayText}
                    </span>

                    <span className="ml-1 shrink-0 animate-pulse border-r-2 border-white"></span>
                </p>

            </div>

        </div>
    );
}