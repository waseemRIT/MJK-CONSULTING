import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import { EMAIL, PHONES } from '../constants';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/realwaseemqaffaf@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        // Reset status after 5 seconds to allow another submission
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-luxuryBlack pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We are here to assist you. Reach out to us for any inquiries or to schedule your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxuryGray border border-gray-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    {PHONES.map((phone, idx) => (
                      <p key={idx} className="text-gray-400">{phone}</p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxuryGray border border-gray-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">{EMAIL}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxuryGray border border-gray-800 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Office</h4>
                    <p className="text-gray-400">Business Bay, Dubai, UAE</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-luxuryGray border border-gray-800 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-400">Mon - Fri: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 9:00 AM – 6:00 PM</p>
                    <p className="text-gray-400">Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="p-8 bg-gradient-to-br from-green-900/20 to-luxuryGray border border-green-900/30 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-600 rounded-full">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Chat on WhatsApp</h3>
              </div>
              <p className="text-gray-400 mb-6">Need a quick response? Message us directly on WhatsApp.</p>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded transition-colors"
              >
                Start Chat
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-luxuryGray border border-gray-800 p-8 md:p-10 rounded-xl shadow-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Request Free Consultation</h3>
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <Send size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Request Sent!</h4>
                <p className="text-gray-400">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-luxuryBlack border border-gray-700 rounded p-3 text-white focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors outline-none"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-luxuryBlack border border-gray-700 rounded p-3 text-white focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-luxuryBlack border border-gray-700 rounded p-3 text-white focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors outline-none"
                    placeholder="+971 50 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-luxuryBlack border border-gray-700 rounded p-3 text-white focus:ring-1 focus:ring-yellow-500 focus:border-yellow-500 transition-colors outline-none resize-none"
                    placeholder="Tell us about your accounting needs..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Something went wrong. Please try again or email us directly.</p>
                )}

                <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;