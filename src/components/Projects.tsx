"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
    {
        title: "Instagram Reel Edits",
        category: "Short Form",
        color: "from-pink-500 to-orange-400",
        videoUrl: "https://drive.google.com/file/d/1c4kgG0hUHNTNR8dT56gpi4AQ9qTInNbF/preview"
    },
    {
        title: "Cinematic Edits",
        category: "Storytelling",
        color: "from-blue-500 to-purple-500",
        videoUrl: "https://drive.google.com/file/d/1nXiy67dBnNYI9V9i2YdzbC7uD3bcCtVn/preview"
    },
    {
        title: "Mini Vlogs",
        category: "Lifestyle",
        color: "from-green-400 to-cyan-500",
        videoUrl: "https://drive.google.com/file/d/10J6K19gM9I0yZaR_fGOAZYlB2AVE8n-5/preview"
    },
    {
        title: "Documentary Style Edits",
        category: "Long Form",
        color: "from-zinc-500 to-zinc-300",
        videoUrl: "https://drive.google.com/file/d/1bD1UTlfDQu6S7-BcutcyJp8DOqEDUwjo/preview"
    }
];

export default function Projects() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    // Lock scroll when modal is open
    if (typeof document !== "undefined") {
        document.body.style.overflow = selectedVideo ? 'hidden' : 'auto';
    }

    return (
        <section className="bg-[#121212] text-white py-32 px-8 md:px-24 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 flex flex-col items-center text-center"
                >
                    <span className="uppercase tracking-widest text-sm text-gray-500 mb-4 font-mono">Portfolio</span>
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            onClick={() => setSelectedVideo(project.videoUrl)}
                            className="group relative h-[400px] rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="absolute inset-x-0 top-0 h-2/3 bg-black/40 border-b border-white/5 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                                    <svg className="w-8 h-8 text-white group-hover:text-black transition-colors translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 h-1/3 p-8 flex flex-col justify-end bg-gradient-to-t from-[#121212] to-transparent">
                                <div>
                                    <span className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-semibold tracking-tight">{project.title}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-[#050505]/95 backdrop-blur-xl"
                        onClick={() => setSelectedVideo(null)}
                    >
                        {/* Close Button */}
                        <button
                            className="absolute top-6 right-6 md:top-12 md:right-12 text-white/50 hover:text-white transition-colors p-2"
                            onClick={() => setSelectedVideo(null)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Video Container */}
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5"
                        >
                            <iframe
                                src={selectedVideo}
                                className="w-full h-full"
                                allow="autoplay"
                                title="Video Preview"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
