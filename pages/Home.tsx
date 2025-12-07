import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TAGLINE, ICON_MAP } from '../constants';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920&auto=format&fit=crop" 
            alt="Corporate Accounting Office" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-luxuryBlack/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Your Financial Partner for a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">Secure Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional accounting, auditing, and advisory services tailored to elevate your business performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => navigate('/contact')} className="min-w-[200px]">
              Book Consultation
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="min-w-[200px]">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-luxuryBlack relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 border border-yellow-500/30 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop" 
                alt="About MJK Team" 
                className="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 w-full object-cover aspect-square"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-yellow-500 font-sans uppercase tracking-widest text-sm font-semibold mb-2">About Us</h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Serving Our Community with Integrity</h3>
                <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              </div>
              <p className="text-gray-400 leading-relaxed text-lg">
                At MJK Accounting Consultancy, we believe that financial clarity is the foundation of business success. Based in the heart of the UAE, we are dedicated to providing world-class financial solutions that empower businesses to grow, adapt, and thrive in a competitive market.
              </p>
              <p className="text-gray-400 leading-relaxed text-lg">
                Our team of seasoned experts brings decades of combined experience in auditing, taxation, and strategic planning. We don't just crunch numbers; we interpret them to unlock opportunities for your secure future.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500" />
                  <span className="text-white font-medium">Certified Experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500" />
                  <span className="text-white font-medium">Tailored Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-yellow-500" />
                  <span className="text-white font-medium">Regulatory Compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-luxuryGray relative border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-yellow-500 font-sans uppercase tracking-widest text-sm font-semibold mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Comprehensive Financial Services</h3>
            <p className="text-gray-400">Delivering excellence across a wide spectrum of financial disciplines.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName] || ArrowRight;
              return (
                <div 
                  key={idx} 
                  className="group p-8 bg-luxuryBlack border border-gray-800 hover:border-yellow-500/50 rounded-sm transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-900/10"
                >
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500 transition-colors duration-300">
                    <Icon className="text-yellow-500 group-hover:text-black transition-colors" size={24} />
                  </div>
                  <h4 className="text-xl font-serif font-semibold text-white mb-4 group-hover:text-yellow-500 transition-colors">
                    {service.title}
                  </h4>
                  <ul className="space-y-2">
                    {service.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="mt-1.5 w-1 h-1 bg-yellow-500 rounded-full shrink-0"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-luxuryBlack/20 pattern-grid-lg"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-yellow-100 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation today and let our experts guide you towards sustainable growth and financial stability.
          </p>
          <Button onClick={() => navigate('/contact')} className="bg-luxuryBlack text-white hover:bg-gray-800 shadow-xl border-none">
            Book Your Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;