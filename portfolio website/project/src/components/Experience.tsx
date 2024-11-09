import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
   {
    title: 'Product Manager Fellow',
    company: 'Doremon Den',
    period: 'May 2024 - Jul 2024',
    description: 'Completed a Product Manager Fellowship, gaining hands-on experience in product development, strategy, and lifecycle management. Worked on real-world projects to build skills in product roadmapping, user persona development, metrics analysis, and cross-functional collaboration to drive product success.',
  },
  
  {
    title: 'Full Stack Developer',
    company: 'Aefterschool',
    period: 'Mar 2023 - Jun 2023',
    description: 'Developed a responsive website using HTML, CSS, JavaScript, and MERN, enhancing functionality and user experience. Integrated email automation via SMTP and implemented the RazorPay Payment Gateway. Collaborated with senior developers to resolve website issues efficiently based on feedback.',
  },
 
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Professional Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-indigo-600 last:pb-0"
              >
                <div className="absolute left-[-9px] top-0 w-4 h-4 bg-indigo-600 rounded-full" />
                
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-gray-400 mb-2">
                        <Briefcase size={16} className="mr-2" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-indigo-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}