import React from 'react';
import { Anchor, Ship, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-black to-gray-900"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
              The DD214 Vet Solution Story
            </h2>
            <div className="flex justify-center space-x-4 mb-8">
              <Ship className="w-8 h-8 text-blue-400" />
              <Anchor className="w-8 h-8 text-blue-400" />
              <Award className="w-8 h-8 text-blue-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://gnuofxzeqjwkyjggmfeo.supabase.co/storage/v1/object/sign/LittlePaws/DDG-60-USS-Paul-Hamilton-024.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJMaXR0bGVQYXdzL0RERy02MC1VU1MtUGF1bC1IYW1pbHRvbi0wMjQuanBnIiwiaWF0IjoxNzMzNTY0OTcyLCJleHAiOjQ4NTU2Mjg5NzJ9.VVfWbaeOg_RFjYm3c4IOYQCvAx9VMiX7SrNPv2ZmT5U&t=2024-12-07T09%3A49%3A22.414Z"
                alt="USS Paul Hamilton"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm">
                USS Paul Hamilton (DDG-60)
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  What's in a Name?
                </h3>
                <p className="text-gray-300">
                  Ever wonder what "DD214" means? It's not just a random
                  combination of letters and numbers – it's a key that unlocks a
                  world of veteran experiences. Every service member receives a
                  DD214 form upon separating from the military, a document that
                  encapsulates their entire service history.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Our Journey
              </h3>
              <div className="space-y-6 text-gray-300">
                <p>
                  Our story begins on the sun-drenched shores of Hawaii back in
                  2000. Two fresh-faced Navy sailors, brimming with excitement
                  and a touch of nervousness, reported for duty aboard the USS
                  Paul Hamilton (DDG-60). Little did they know that this chance
                  meeting would spark a friendship that would weather storms
                  both literal and metaphorical for decades to come.
                </p>
                <p>
                  Through multiple deployments, countless hours on watch, and
                  more than a few adventures in ports around the world, our
                  founders forged a bond that can only be described as
                  "battle-tested." As the years rolled by and civilian life
                  beckoned, they may have hung up their uniforms, but they never
                  lost touch with each other or their desire to serve.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  The Mission Continues
                </h3>
                <p className="text-gray-300">
                  Fast forward through careers, families, and a whole lot of
                  life experience, and these two Navy vets found themselves
                  reuniting with a shared vision. They realized that their
                  unique blend of military discipline, adaptability, and
                  hard-earned business acumen could be put to use helping others
                  achieve their dreams.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <img
                src="https://gnuofxzeqjwkyjggmfeo.supabase.co/storage/v1/object/sign/LittlePaws/Coutons.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJMaXR0bGVQYXdzL0NvdXRvbnMuanBnIiwiaWF0IjoxNzMzNTY1MjkyLCJleHAiOjIwNDg5MjUyOTJ9.1rUBI66gx9V6ZmZMd3CqYrDrdQMflUbKIjlZsnbeSNI&t=2024-12-07T09%3A54%3A42.488Zauto=format&fit=crop&w=800&h=600"
                alt="Naval Operations"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">
                Join Our Crew
              </h3>
              <p className="text-gray-300 mb-8">
                At DD214 Vet Solution, we're more than just a business
                consulting firm. We're a testament to the enduring power of
                friendship, the value of shared experiences, and the incredible
                things that can happen when people come together to support each
                other's dreams.
              </p>
              <a
                href="https://forms.gle/5yJfNxZNgeRe4hmL7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition shadow-lg"
              >
                Start Your Journey With Us
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
