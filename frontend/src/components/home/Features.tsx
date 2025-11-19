import { Monitor, Trophy, GraduationCap, Library } from "lucide-react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Smart Classrooms",
      description:
        "Modern technology-enabled learning spaces with interactive boards and digital resources.",
    },
    {
      icon: Trophy,
      title: "Sports Ground",
      description:
        "State-of-the-art athletic facilities for comprehensive physical development and team sports.",
    },
    {
      icon: GraduationCap,
      title: "Experienced Faculty",
      description:
        "Dedicated educators with advanced degrees and passion for student success.",
    },
    {
      icon: Library,
      title: "Library & E-Learning",
      description:
        "Extensive collection of books and digital resources for enhanced learning experiences.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose Our School
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We provide comprehensive educational excellence with world-class
            facilities and dedicated support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
