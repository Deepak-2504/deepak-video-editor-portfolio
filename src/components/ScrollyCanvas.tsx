"use client";

import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // We track the scroll progress of our 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map 0 -> 1 scroll to frame index 0 -> 119
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    // Preload all exactly 120 images
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        const indexStr = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${indexStr}_delay-0.066s.png`;
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      renderFrame(frameIndex.get());
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // initial setup

    return () => window.removeEventListener("resize", handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      renderFrame(latest);
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameIndex, images]);

  const renderFrame = (index: number) => {
    const currentFrame = Math.round(index);
    if (!images[currentFrame]) return;
    const img = images[currentFrame];

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (img.complete) {
       drawCover(ctx, img, canvas.width, canvas.height);
    } else {
       img.onload = () => drawCover(ctx, img, canvas.width, canvas.height);
    }
  };

  const drawCover = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h);
    const imgRatio = img.width / img.height;
    const canvasRatio = w / h;
    let renderW, renderH, x, y;

    if (canvasRatio > imgRatio) {
      renderW = w;
      renderH = w / imgRatio;
      x = 0;
      y = (h - renderH) / 2;
    } else {
      renderW = h * imgRatio;
      renderH = h;
      x = (w - renderW) / 2;
      y = 0;
    }
    ctx.drawImage(img, x, y, renderW, renderH);
  };

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full" id="scrolly-container">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full bg-[#121212]"
        />
      </div>
    </div>
  );
}
