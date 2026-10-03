import Image from "next/image";
import { useEffect, useState } from "react";
import { GraduationCap, NotepadText, Trophy } from "lucide-react";

export default function HomePage() {
    const aboutMe = [
        { icon: <GraduationCap />, text: "BSc in Software Engineering" },
        { icon: <Trophy />, text: "Hackathon Champion" },
        { icon: <Trophy />, text: "Project Showcase Winner" },
        { icon: <NotepadText />, text: "Content Writer" }
    ];

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
            <Image
                src="/me.jpeg"
                alt=""
                fill
                priority
                className="object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/45"></div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center">

                <p className="text-white text-2xl">
                    Hi there! I am
                </p>

                <p className="text-6xl font-extrabold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#e1f1fb] via-[#a8d9fc] to-[#66bfff]">
                    Ishmaam Iftekhar Khan
                </p>

                <p className="text-white flex items-center justify-center text-3xl pt-6">
                    <span className="mr-2">
                        {aboutMe[currentIndex].icon}
                    </span>

                    {displayText}

                    <span className="border-r-2 border-white animate-pulse ml-1"></span>
                </p>

            </div>

        </div>
    );
}