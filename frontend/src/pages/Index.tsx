import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroVideo from '@/components/home/HeroVideo';
import EventCarousel from '@/components/home/EventCarousel';
import Features from '@/components/home/Features';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroVideo />
        <EventCarousel />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
