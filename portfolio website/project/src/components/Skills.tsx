import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = {
  'Frontend': [
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Next.js', level: 85 },
  ],
  'Backend': [
    { name: 'Node.js', level: 92 },
    { name: 'Python', level: 85 },
    { name: 'Django', level: 80 },
    { name: 'PostgreSQL', level: 88 },
  ],
  'DevOps': [
    { name: 'Docker', level: 85 },
    { name: 'AWS', level: 82 },
    { name: 'CI/CD', level: 88 },
    { name: 'Kubernetes', level: 75 },
  ],
  'Product': [
    { name: 'Agile', level: 90 },
    { name: 'User Research', level: 85 },
    { name: 'Analytics', level: 88 },
    { name: 'Strategy', level: 92 },
  ],
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(skills).map(([category, categorySkills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 p-6 rounded-xl"
              >
                <h3 className="text-xl font-bold text-white mb-6">{category}</h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-indigo-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.2 + skillIndex * 0.1 }}
                          className="bg-indigo-600 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}