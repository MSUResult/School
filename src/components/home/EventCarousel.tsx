import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import event1 from "/IT-Wizards-scaled.jpg";
import event2 from "/main.jpg";
import event3 from "/Marshal-Neil-scaled.jpg";

const events = [
  {
    id: 1,
    title: "Smart Classroom Innovation",
    subtitle: "Digital learning experience for modern education",
    date: "Aug 24, 2025",
    image: event1,
    link: "/blog/smart-classroom",
  },
  {
    id: 2,
    title: "Annual Sports Championship",
    subtitle: "Celebrating athletic excellence and team spirit",
    date: "Sep 15, 2025",
    image: event2,
    link: "/blog/sports-championship",
  },
  {
    id: 3,
    title: "Science Lab Excellence",
    subtitle: "Hands-on learning in state-of-the-art facilities",
    date: "Oct 10, 2025",
    image: event3,
    link: "/blog/science-lab",
  },
];

const EventCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-background py-0 overflow-hidden">
      <div className="relative h-[550px] md:h-[650px]">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative h-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "var(--gradient-overlay)" }}
              />

              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 lg:px-8">
                  <div className="max-w-3xl text-white animate-fade-in">
                    <p className="text-accent font-bold mb-3 text-lg tracking-wide">
                      {event.date}
                    </p>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {event.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-white/95 font-light leading-relaxed">
                      {event.subtitle}
                    </p>
                    <Button
                      size="lg"
                      className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover-scale"
                      onClick={() => (window.location.href = event.link)}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white p-4 rounded-full transition-all hover-scale z-10 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" strokeWidth={2} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white p-4 rounded-full transition-all hover-scale z-10 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" strokeWidth={2} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {events.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "w-10 bg-accent shadow-lg"
                  : "w-2.5 bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventCarousel;
