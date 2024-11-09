import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Cricket E-Commerce Platform',
    description: 'A full-stack e-commerce solution for all cricket acessories with real-time inventory management',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
    tech: ['React', 'Node.js', 'MongoDB', 'Express',],
    github: 'https://github.com/Anuj3939/MERN-Ecommerce',
  },
  {
    title: 'Helping Hand',
    description: 'Second Hand marketplace for unviversity students and a platform where you can find places and cafes to hangout near campus.',
    image: 'https://drive.google.com/file/d/15oQDbMdO_SDkN8GHFswn-uQQ520ljxtN/view?usp=sharing',
    tech: ['Django', 'Bootstrap'],
    github: 'https://github.com/Anuj3939/Helping-Hand',
  },
  {
    title: 'Gully Cricket ScoreKeeper',
    description: 'Keeping track of a gully cricket match made easy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Anuj3939/gullyScorekeeper',
    live: 'https://anuj3939.github.io/gullyScorekeeper/',
  },
  {
    title: 'Abalone Age Prediction',
    description: 'ML model to predict the age of Abalone just by the images of their of shells',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tech: ['Machine Learning', 'Random Forest Regressor', 'Decision Trees'],
    github: 'https://github.com/Anuj3939/Abalone-age-pediction',

  },
  {
    title: 'Product Deck',
    description: 'Increasing profitability of Blinkit',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tech: ['User Journey', 'Wireframing' , 'Problem Framing', 'API', 'Product Metrics', 'Product Deck'],
    live: 'https://drive.google.com/file/d/1GhMAa_XG_t00FHeKpxuuAE8ZY2Xh7GAK/view?pli=1',
  },
  {
    title: 'Product Portfolio',
    description: 'Complete Product portfolio including 8 different project showcasing different skils for product management',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tech: ['Product research', 'User Personas', 'RICE'],
    live: 'https://www.notion.so/Anuj-is-your-PM-Buddy-db08c1b399cb4b0ca6e38774572853c9',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-800 text-indigo-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}