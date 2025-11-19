import { useEffect, useState } from "react";
import { ChevronDown, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPoster from "/use.jpg";
import schoolLogo from "@/assets/school-logo.png";

const HeroVideo = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="sch.mp4" type="video/mp4" />
          <source src="sch.mp4" type="video/mp4" />
        </video>

        {/* Premium Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4 pt-24">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <div className="flex flex-col items-center gap-6 mb-8">
            <img
              src={"ILIKE.png"}
              alt="School Logo"
              className="h-20 w-20 md:h-24 md:w-24 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              Shaping Future Leaders
            </h1>
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Innovative learning, AI-powered teaching, and future-ready growth
            for students of every age
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover-scale"
            >
              Admissions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold px-10 py-6 text-lg shadow-xl transition-all hover-scale"
            >
              Visit Campus
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold px-10 py-6 text-lg shadow-xl transition-all hover-scale"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/90 animate-bounce cursor-pointer hover:text-white transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" strokeWidth={1.5} />
      </button>
    </section>
  );
};

export default HeroVideo;
