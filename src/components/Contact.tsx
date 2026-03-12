"use client";

import { motion } from "framer-motion";

export default function Contact() {
    const whatsappMessage = encodeURIComponent("Hello Deepak, I saw your portfolio and I'm interested in working with you.");

    return (
        <footer className="bg-[#0a0a0a] text-white py-32 px-8 md:px-24 relative z-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-purple-900/20 to-transparent blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="uppercase tracking-widest text-sm text-purple-400 mb-6 block font-mono">Contact</span>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Collaborate</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-xl mx-auto font-light">
                        Ready to bring your vision to life? Get in touch instantly via Email or WhatsApp.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center"
                >
                    {/* Email Button */}
                    <a
                        href="mailto:deepak.chowdary430@gmail.com"
                        className="group relative flex items-center justify-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="font-semibold text-lg tracking-wide relative z-10">Email Me</span>
                    </a>

                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/918310040897?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative flex items-center justify-center gap-4 px-8 py-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all duration-300 overflow-hidden w-full sm:w-auto"
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <svg className="w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors relative z-10" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.008 2C6.48 2 2 6.481 2 12.008c0 1.761.464 3.473 1.341 5L2 22l5.122-1.344A9.957 9.957 0 0012.008 22c5.528 0 10.008-4.481 10.008-10.008C22.016 6.481 17.536 2 12.008 2zM17.152 16.5c-.244.685-1.428 1.31-1.954 1.378-.456.059-.972.106-3.132-.79-2.607-1.08-4.286-3.738-4.42-3.918-.129-.176-1.049-1.398-1.049-2.665.0-1.267.653-1.898.889-2.146.208-.219.497-.291.76-.291.244 0 .468.006.669.016.236.012.548-.1.85 .639.317.776.953 2.33 1.036 2.493.084.164.148.375.02.616-.115.228-.184.364-.356.576-.18.212-.357.404-.52.628-.18.232-.38.483-.164.856.223.385.992 1.64 2.126 2.652 1.463 1.305 2.69 1.705 3.078 1.889.388.184.615.156.848-.108.232-.266 1.008-1.176 1.28-1.576.27-.4.542-.336.885-.205.344.133 2.185 1.032 2.56 1.22.378.188.632.28.724.436.096.155.096.904-.148 1.589z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold text-lg tracking-wide relative z-10">WhatsApp Me</span>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-32 flex flex-col md:flex-row items-center justify-between w-full border-t border-white/10 pt-8 text-gray-500"
                >
                    <p>© {new Date().getFullYear()} Deepak. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors uppercase tracking-wider text-sm font-mono">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors uppercase tracking-wider text-sm font-mono">YouTube</a>
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}
