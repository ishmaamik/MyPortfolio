"use client";

import React, { useEffect, useState } from "react";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById("home");

            if (homeSection) {
                const sectionBottom = homeSection.offsetTop + homeSection.offsetHeight;

                setScrolled(window.scrollY >= sectionBottom);
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 z-50 w-full h-16 shadow-sm transition-all duration-300 ${
                scrolled
                    ? "bg-[#151420]"
                    : "bg-[#151420]/50 backdrop-blur-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <div className="flex items-center pb-3.5 text-2xl font-bold bg-gradient-to-r from-[#ffd8b6] via-[#ffbd84] via-[#f8a55d] via-[#f89034] to-[#fb6400] bg-clip-text text-transparent">
                        Ishmaam
                    </div>

                    {/* Navigation */}
                    <nav className="flex font-semibold font-sans gap-6 [&_a]:pb-3.5 [&_a]:border-transparent [&_a]:border-b-10 [&_a]:px-3 [&_a:hover]:border-b-amber-500 [&_a:hover]:scale-104 [&_a:hover]:bg-[#4e4747] [&_a]:rounded-lg">

                        <a
                            href="#home"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            About Me
                        </a>

                        <a
                            href="#education"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            Education
                        </a>

                        <a
                            href="#project"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            Projects
                        </a>

                        <a
                            href="#achievements"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            Achievements
                        </a>

                        <a
                            href="#contact"
                            className="text-[#caced4] transition-all duration-200"
                        >
                            Contact Me
                        </a>

                    </nav>
                </div>
            </div>
        </header>
    );
}