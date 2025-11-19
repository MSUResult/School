import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download } from 'lucide-react';
import { toast } from 'sonner';

const CallToAction = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We will contact you soon.');
    setEmail('');
    setPhone('');
  };

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Enroll Now for 2025–26</h2>
            <p className="text-xl md:text-2xl text-primary-foreground/95 font-light leading-relaxed">
              Secure your child's future with quality education and holistic development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Enrollment Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Get Started</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg focus:bg-white/25 transition-colors"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number (Optional)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-14 text-lg focus:bg-white/25 transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-semibold py-7 text-lg shadow-xl hover:shadow-2xl transition-all hover-scale"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>

            {/* Download Brochure */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 lg:p-10 flex flex-col justify-center items-center text-center shadow-2xl border border-white/20">
              <Download className="h-20 w-20 mb-6 text-accent" strokeWidth={1.5} />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Admission Brochure</h3>
              <p className="text-primary-foreground/95 mb-8 text-lg font-light leading-relaxed">
                Download our comprehensive admission guide with all details about programs, fees, and facilities.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-primary font-semibold px-10 py-7 text-lg shadow-xl transition-all hover-scale"
              >
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
