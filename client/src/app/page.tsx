"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import { GraduationCap, Notebook, NotepadText, Trophy } from 'lucide-react'

export default function Home() {

  const aboutMe = [
    { icon: <GraduationCap />, text: 'BSc in Software Engineering' },
    { icon: <Trophy />, text: 'Hackathon Champion' },
    { icon: <Trophy/>, text: 'Project Showcase Winner' },
    { icon: <NotepadText/>, text: 'Content Writer' }
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
        // Typing
        if (displayText.length < currentText.text.length) {
          setDisplayText(currentText.text.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Move to next text
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % aboutMe.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <div className="flex w-full">
      <div className="flex justify-start">
        <Image src="/ishuwu.jpg" alt="" height={600} width={500} className="" />
      </div>
      <div className="text-center pt-40 flex-1">
        <p className="text-white mx-auto text-2xl">Hi there! I am</p>
        <p className="mx-auto text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#e1f1fb] to-[#a8d9fc] to-[#8dd0ff] to-[#59b8fc] to-[#0190f6]">Ishmaam Iftekhar Khan</p>
        <p className="text-white flex items-center justify-center text-3xl pt-4">
          {aboutMe[currentIndex].icon && <span className="mr-2">{aboutMe[currentIndex].icon}</span>}
          {displayText}
          <span className="border-r-2 border-white animate-pulse ml-1"></span>
        </p>
      </div>
    </div>
  );
}
