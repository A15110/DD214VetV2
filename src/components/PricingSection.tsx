import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface PricingTier {
  name: string;
  price: {
    setup: number;
    monthly: number;
  };
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Basic Web Presence',
    price: {
      setup: 500,
      monthly: 50
    },
    description: 'Perfect for small businesses just starting their digital journey',
    features: [
      'Basic website (up to 5 pages)',
      'Mobile-friendly design',
      'Basic SEO setup',
      'Contact form integration',
      'Monthly hosting and maintenance'
    ]
  },
  {
    name: 'Professional Package',
    price: {
      setup: 1500,
      monthly: 100
    },
    description: 'Comprehensive solution for growing businesses',
    features: [
      'Custom website design (up to 10 pages)',
      'Enhanced SEO optimization',
      'Blog setup and integration',
      'Social media integration',
      'Monthly analytics report',
      'Routine updates and support'
    ],
    isPopular: true
  },
  {
    name: 'One-Time Build',
    price: {
      setup: 1000,
      monthly: 0
    },
    description: 'Simple website build with no monthly commitment',
    features: [
      'Basic website build',
      'Mobile responsive design',
      'Basic SEO setup',
      'Updates: $150 per request',
      'Hosting not included',
      'One-time payment'
    ]
  }
];

const additionalServices = [
  {
    name: 'SEO Optimization',
    price: 300,
    period: 'month'
  },
  {
    name: 'Social Media Management',
    price: 500,
    period: 'month'
  },
  {
    name: 'Content Creation',
    price: 100,
    period: 'article'
  },
  {
    name: 'Email Marketing Campaigns',
    price: 200,
    period: 'campaign'
  }
];

export default function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Transparent Pricing Plans
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our core features with varying levels of support and customization.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              variants={itemVariants}
              className={`relative rounded-2xl p-8 ${
                tier.isPopular
                  ? 'bg-gradient-to-b from-blue-600 to-blue-800 shadow-xl transform hover:scale-105 transition-transform duration-300'
                  : 'bg-gray-800'
              }`}
            >
              {tier.isPopular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-yellow-300">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-4 text-white">{tier.name}</h3>
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${tier.price.monthly}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  ${tier.price.setup} initial setup
                </div>
              </div>
              <p className="text-gray-300 mb-6">{tier.description}</p>
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/5yJfNxZNgeRe4hmL7"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-lg transition ${
                  tier.isPopular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-gray-800 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-white">Additional Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.name} className="bg-gray-700 rounded-xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-white">{service.name}</h4>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">${service.price}</span>
                  <span className="text-gray-400 ml-2">/{service.period}</span>
                </div>
                <a
                  href="https://forms.gle/5yJfNxZNgeRe4hmL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Add Service
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gray-800 rounded-lg p-4">
            <AlertCircle className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-gray-300">
              Need a custom solution? {' '}
              <a
                href="https://forms.gle/5yJfNxZNgeRe4hmL7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Contact us
              </a>
              {' '} for a personalized quote.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}