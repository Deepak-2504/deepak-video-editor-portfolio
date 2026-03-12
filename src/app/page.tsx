import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white font-sans selection:bg-purple-500/30">
      <div className="relative">
        <Overlay />
        <ScrollyCanvas />
      </div>

      <Projects />
      <About />
      <Contact />
    </main>
  );
}
