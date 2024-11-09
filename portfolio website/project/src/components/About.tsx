import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Profile"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-indigo-600/20 rounded-lg"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
               I'm currently in my final year of B.Tech in Electrical Engineering at Nirma University. With a strong foundation in development frameworks and tools, I have hands-on experience with the MERN stack, Django, Figma, various databases, programming languages, and cloud platforms like AWS and Azure.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
               My technical expertise is complemented by a course in product management, which has helped me gain a comprehensive view of development from a business perspective. This blend of skills enables me to contribute effectively to both the technical and strategic aspects of projects.
              </p>
              
            
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}