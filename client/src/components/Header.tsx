"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinkClassName =
    "rounded-lg border-b-2 border-transparent px-3 py-2 text-sm text-[#caced4] transition-[background-color,color,transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:scale-105 hover:border-amber-500 hover:bg-[#4e4747] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 xl:text-base";

const links = [
    ["home", "Home"],
    ["about", "About Me"],
    ["skills", "Skills"],
    ["education", "Education"],
    ["project", "Projects"],
    ["achievements", "Achievements"],
    ["contact", "Contact Me"],
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            className={`fixed left-0 top-0 z-50 w-full shadow-sm transition-all duration-300 ${
                scrolled
                    ? "bg-[#151420]"
                    : "bg-[#151420]/50 backdrop-blur-md"
            }`}
        >
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className="flex min-h-16 items-center justify-between gap-3 py-2">
                    <a href="#home" className="min-w-0 truncate text-base font-bold text-white sm:text-lg lg:text-xl">
                        Ishmaam Iftekhar Khan
                    </a>

                    <nav aria-label="Main navigation" className="hidden items-center gap-1 font-sans font-semibold xl:flex 2xl:gap-2">
                        {links.map(([id, label]) => (
                            <a key={id} href={`#${id}`} className={navLinkClassName}>
                                {label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="inline-flex shrink-0 items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 xl:hidden"
                    >
                        {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav
                    id="mobile-navigation"
                    aria-label="Mobile navigation"
                    className="border-t border-white/10 bg-[#151420] px-4 py-3 shadow-lg xl:hidden sm:px-6"
                >
                    <div className="mx-auto grid max-w-screen-2xl gap-1 sm:grid-cols-2">
                        {links.map(([id, label]) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-[#caced4] hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    );
}