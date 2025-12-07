import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, PHONES, EMAIL, SOCIAL_LINKS } from '../constants';
import Button from './Button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const handleConsultationClick = () => {
    navigate('/contact');
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-luxuryBlack/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-800' : 'bg-transparent py-5'
        }`}
      >
        <div className="relative z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-sm flex items-center justify-center font-serif text-black font-bold text-xl shadow-lg group-hover:shadow-yellow-500/20 transition-all">
              M
            </div>
            <span className="text-2xl font-serif font-bold text-white tracking-wider">
              {COMPANY_NAME} <span className="text-yellow-500 text-sm font-sans font-normal tracking-widest uppercase ml-1 opacity-0 md:opacity-100 transition-opacity hidden md:inline-block">Consultancy</span>
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  `text-sm font-medium tracking-wide uppercase transition-colors hover:text-yellow-500 ${
                    isActive ? 'text-yellow-500' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button onClick={handleConsultationClick} className="ml-4">
              Free Consultation
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-yellow-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`md:hidden fixed inset-0 bg-luxuryBlack/98 z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} pt-24 px-6`}>
           <nav className="flex flex-col gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                className={({ isActive }) => 
                  `text-xl font-medium tracking-wide uppercase transition-colors hover:text-yellow-500 ${
                    isActive ? 'text-yellow-500' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button onClick={handleConsultationClick} className="w-full max-w-xs mt-4">
              Free Consultation
            </Button>
           </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-luxuryGray border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-yellow-600 rounded-sm flex items-center justify-center font-serif text-black font-bold">M</div>
                <span className="text-xl font-serif font-bold text-white tracking-wider">{COMPANY_NAME}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted financial partner for a secure and prosperous future. Professional accounting and consultancy services tailored to your needs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail className="text-yellow-500 shrink-0" size={18} />
                  <a href={`mailto:${EMAIL}`} className="hover:text-yellow-500 transition-colors">{EMAIL}</a>
                </li>
                {PHONES.map((phone, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                    <Phone className="text-yellow-500 shrink-0" size={18} />
                    <a href={`tel:${phone.replace(/\s/g, '')}`} className="hover:text-yellow-500 transition-colors">{phone}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-serif font-semibold text-lg mb-6">Connect</h3>
              <div className="flex gap-4">
                <a 
                  href={SOCIAL_LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href={SOCIAL_LINKS.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition-all"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2025 {COMPANY_NAME} Accounting Consultancy. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="text-gray-600 text-sm hover:text-gray-400 cursor-pointer">Privacy Policy</span>
              <span className="text-gray-600 text-sm hover:text-gray-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;