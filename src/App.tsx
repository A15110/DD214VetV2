import React from 'react';
import { Building2, Brain, MessageSquareCode, Share2, Cpu } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  const businessServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Solutions",
      description: "Custom AI implementation to streamline operations and boost efficiency"
    },
    {
      icon: <MessageSquareCode className="w-8 h-8" />,
      title: "Web Development",
      description: "Professional website design and development services"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive social media marketing and digital presence management"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT Support",
      description: "Reliable technical support and IT infrastructure management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-900 to-blue-950">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4">
        <ServiceSection 
          icon={<Building2 />}
          title="Business Solutions"
          description="Helping businesses thrive in the digital age with comprehensive tech services"
          services={businessServices}
        />
        <PricingSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;