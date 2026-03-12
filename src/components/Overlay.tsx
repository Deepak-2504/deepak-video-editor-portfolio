"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Section 1: 0% to 15% scroll (Center)
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.15, 0.2], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    // Section 2: 25% to 45% scroll (Left aligned)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.45], [50, -50]);

    // Section 3: 55% to 75% scroll (Right aligned)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.55, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.75], [50, -50]);

    // Section 4: 80% to 100% scroll (Center)
    const opacity4 = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.75, 1], [50, -50]);

    return (
        <div ref={containerRef} className="absolute top-0 left-0 w-full h-[500vh] z-10 pointer-events-none">

            {/* Section 1 */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white p-8"
                style={{ opacity: opacity1, y: y1 }}
            >
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-center">
                    Deepak <br />
                    <span className="text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Video Editor</span>
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-300 tracking-wide mt-4 uppercase">
                    Turning Raw Footage Into Cinematic Stories
                </p>
            </motion.div>

            {/* Section 2 */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen flex flex-col items-start justify-center text-white p-8 md:p-24"
                style={{ opacity: opacity2, y: y2 }}
            >
                <h2 className="text-5xl md:text-7xl font-semibold max-w-3xl leading-tight tracking-tight">
                    I craft cinematic edits <br />
                    <span className="text-gray-400">for social media, brands, and storytelling.</span>
                </h2>
            </motion.div>

            {/* Section 3 */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen flex flex-col items-end justify-center text-white p-8 md:p-24 text-right"
                style={{ opacity: opacity3, y: y3 }}
            >
                <div className="flex flex-col gap-4 text-4xl md:text-6xl font-bold tracking-tighter">
                    <span>Reels</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cinematic Edits</span>
                    <span>Mini Vlogs</span>
                    <span className="text-gray-400 font-light">Documentary Style Editing</span>
                </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
                className="fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white p-8"
                style={{ opacity: opacity4, y: y4 }}
            >
                <h2 className="text-5xl md:text-7xl font-semibold text-center leading-tight tracking-tight">
                    Let&apos;s create something <br />
                    amazing together.
                </h2>
            </motion.div>

        </div>
    );
}
