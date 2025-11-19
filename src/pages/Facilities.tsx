import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { X } from "lucide-react";
import libraryImg from "@/assets/facility-library.jpg";
import labImg from "/asha.avif";
import sportsImg from "/IT-Wizards-scaled.jpg";

const Facilities = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const facilities = [
    {
      title: "Modern Library",
      description:
        "Our extensive library houses over 10,000 books, digital resources, and quiet study areas. Students have access to academic journals, magazines, and online databases for comprehensive research.",
      image: libraryImg,
    },
    {
      title: "Computer Labs",
      description:
        "State-of-the-art computer labs equipped with latest hardware and software. Students learn coding, digital design, and essential computer skills in modern, air-conditioned environments.",
      image: labImg,
    },
    {
      title: "Sports Complex",
      description:
        "World-class sports facilities including basketball courts, tennis courts, swimming pool, and athletic tracks. Professional coaches guide students in various sports and fitness activities.",
      image: sportsImg,
    },
    {
      title: "Science Laboratories",
      description:
        "Well-equipped physics, chemistry, and biology labs with modern instruments and safety equipment. Students conduct hands-on experiments under expert supervision.",
      image: labImg,
    },
    {
      title: "Cafeteria",
      description:
        "Hygienic cafeteria serving nutritious meals and snacks. Our menu is designed by nutritionists to provide balanced, healthy food options for growing children.",
      image: libraryImg,
    },
    {
      title: "Auditorium",
      description:
        "Spacious auditorium with modern audio-visual equipment for assemblies, performances, and events. Seating capacity of 500 with excellent acoustics and lighting.",
      image: sportsImg,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Facilities
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              World-class infrastructure designed to enhance learning and
              development
            </p>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-md hover-lift cursor-pointer"
                  onClick={() => setLightboxImage(facility.image)}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">
              Additional Amenities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                "Medical Room",
                "Transportation",
                "Security Systems",
                "Wi-Fi Campus",
                "Counseling Center",
                "Art & Music Rooms",
                "Hostel Facilities",
                "Solar Power",
              ].map((amenity, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 text-center shadow-md hover-lift"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-accent font-bold text-xl">✓</span>
                  </div>
                  <h3 className="font-semibold text-primary">{amenity}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Security */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Safety & Security
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your child's safety is our top priority. Our campus is equipped
                with 24/7 CCTV surveillance, trained security personnel, fire
                safety systems, and strict visitor protocols. We maintain a
                secure, nurturing environment where students can focus on
                learning and growth.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-primary mb-2">
                    24/7 Surveillance
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Complete campus monitoring with modern CCTV systems
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-primary mb-2">Trained Staff</h3>
                  <p className="text-sm text-muted-foreground">
                    Security personnel trained in emergency response
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-primary mb-2">Fire Safety</h3>
                  <p className="text-sm text-muted-foreground">
                    Modern fire detection and suppression systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-accent"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Facility"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Facilities;
