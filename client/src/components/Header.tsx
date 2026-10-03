"use client";

import React, { useEffect, useState } from "react";

const navLinkClassName =
    "rounded-lg border-b-2 border-transparent px-3 py-2 text-[#caced4] transition-[background-color,color,transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-amber-500 hover:bg-[#4e4747] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500";

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
                    <nav className="flex font-semibold font-sans gap-2 sm:gap-4">

                        <a
                            href="#home"
                            className={navLinkClassName}
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            className={navLinkClassName}
                        >
                            About Me
                        </a>

                        <a
                            href="#education"
                            className={navLinkClassName}
                        >
                            Education
                        </a>

                        <a
                            href="#project"
                            className={navLinkClassName}
                        >
                            Projects
                        </a>

                        <a
                            href="#achievements"
                            className={navLinkClassName}
                        >
                            Achievements
                        </a>

                        <a
                            href="#contact"
                            className={navLinkClassName}
                        >
                            Contact Me
                        </a>

                    </nav>
                </div>
            </div>
        </header>
    );
}