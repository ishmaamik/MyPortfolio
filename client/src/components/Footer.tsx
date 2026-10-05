import { ArrowUpRight, Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <>
        <footer id="contact" className="px-4 pb-10 pt-4 text-white sm:px-8 sm:pb-16 sm:pt-4">
            <section className="relative mx-auto max-w-5xl overflow-hidden border border-white/10 bg-[#111116]/90 px-6 py-10 shadow-2xl shadow-black/20 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
                    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-orange-400/5 blur-[100px]" />
                <div className="relative">
                    <p className="mb-3 text-sm font-medium tracking-wide text-gray-300">
                        Ishmaam Iftekhar Khan
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                        Let&apos;s connect
                    </p>
                    <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                        Have a project
                        <br />
                        in mind?
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                        Get in touch to talk about software engineering, full-stack development, cloud infrastructure, or new opportunities.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="mailto:ishmaam@iut-dhaka.edu"
                            className="inline-flex items-center gap-3 bg-blue-300 px-5 py-3 font-semibold text-[#111116] transition-colors hover:bg-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                        >
                            Email
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ishmaam-iftekhar-khan/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 border border-white/15 px-5 py-3 font-medium text-gray-200 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
                        >
                            Connect on LinkedIn
                            <ArrowUpRight size={18} aria-hidden="true" />
                        </a>

                    </div>

                    <div className="bottom-0 mt-10 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">Email</p>
                            <a href="mailto:ishmaam@iut-dhaka.edu" className="inline-flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-blue-300 sm:text-base">
                                <Mail size={16} aria-hidden="true" />
                                ishmaam@iut-dhaka.edu
                            </a>
                        </div>
                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">Phone</p>
                            <a href="tel:01721307015" className="inline-flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-blue-300 sm:text-base">
                                <Phone size={16} aria-hidden="true" />
                                01721307015
                            </a>
                        </div>
                        <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">Location</p>
                            <p className="inline-flex items-start gap-2 text-sm text-gray-200 sm:text-base">
                                <MapPin size={16} aria-hidden="true" />
                                House 14, Road 6, Dhanmondi, Dhaka
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </footer>
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-white/10 bg-[#151420]/95 px-4 py-5 text-center text-sm text-white backdrop-blur-md sm:flex-row sm:px-8 sm:py-6 sm:text-left">
            <p className="text-xs text-gray-400 sm:text-sm">
                © 2026 All rights reserved by Ishmaam Iftekhar Khan
            </p>
            <div className="flex items-center gap-8 sm:gap-10">
                <a
                    href="https://github.com/ishmaamik"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                    className="text-gray-300 transition-colors hover:text-white"
                >
                    <Github size={25} aria-hidden="true" />

                    <p className="pt-2">Github</p>
                </a>
                <a
                    href="https://medium.com/@ishmaam"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Medium profile"
                    className="transition-opacity hover:opacity-75"
                >
                    <Image src="/medium.svg" alt="" width={27} height={27} className="rounded-full" />
                    <p className="pt-2">Medium</p>
                </a>
            </div>
        </div>
        </>
    );
}