"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-[#121212] text-white py-32 px-8 md:px-24 border-t border-white/5 relative z-20 overflow-hidden">
            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="uppercase tracking-widest text-sm text-blue-400 mb-6 block font-mono">The Editor</span>
                    <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight text-gray-300">
                        Hi, I&apos;m <span className="text-white font-bold">Deepak</span>. <br />
                        A passionate video editor who transforms raw footage into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">cinematic stories.</span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
                        I specialize in editing social media reels, cinematic edits, mini vlogs, and documentary style content.
                        My workflow is powered by industry-standard framing and color science.
                    </p>

                    <div className="mt-12 flex flex-wrap gap-4">
                        {["Premiere Pro", "After Effects", "CapCut", "DaVinci Resolve"].map((tool) => (
                            <div key={tool} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-mono tracking-wide hover:bg-white/10 transition-colors">
                                {tool}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
