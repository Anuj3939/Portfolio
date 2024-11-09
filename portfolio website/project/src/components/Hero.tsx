import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function CodeLine({ position, width, color }: { position: [number, number, number], width: number, color: string }) {
  return (
    <mesh position={position}>
      <planeGeometry args={[width, 0.05]} />
      <meshBasicMaterial color={color} transparent opacity={0.7} />
    </mesh>
  );
}

function Computer() {
  const codeLines = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (codeLines.current) {
      codeLines.current.children.forEach((line, i) => {
        const offset = i * 0.1;
        const opacity = ((Math.sin(clock.getElapsedTime() * 2 + offset) + 1) / 2) * 0.7;
        (line.material as THREE.MeshBasicMaterial).opacity = opacity;
      });
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Monitor */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 2, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
      
      {/* Screen */}
      <mesh position={[0, 0.5, 0.06]}>
        <boxGeometry args={[2.8, 1.8, 0.01]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#1a1a1a"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Code Lines */}
      <group ref={codeLines} position={[0, 0.5, 0.07]}>
        {Array.from({ length: 8 }).map((_, i) => (
          <CodeLine
            key={i}
            position={[-0.8, 0.6 - i * 0.2, 0]}
            width={Math.random() * 1 + 0.5}
            color={i % 2 === 0 ? '#6366f1' : '#818cf8'}
          />
        ))}
      </group>

      {/* Stand */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.3, 1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Base */}
      <mesh position={[0, -1, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[0, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />
          <Computer />
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h2
              initial="hidden"
              animate="visible"
              custom={0}
              variants={titleVariants}
              className="text-gray-400 text-xl mb-2"
            >
              Hello, I'm
            </motion.h2>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={titleVariants}
              className="group cursor-pointer inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 relative">
                Anuj Agrawal
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </h1>
            </motion.div>

            <div className="space-y-2">
              <motion.div
                initial="hidden"
                animate="visible"
                custom={2}
                variants={titleVariants}
                className="relative inline-block"
              >
                <h2 className="text-2xl md:text-4xl text-indigo-400 font-bold relative z-10">
                  Full Stack Developer & <br />Product Manager
                  <motion.span
                    className="absolute inset-0 bg-gray-900/10 -z-10 rounded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </h2>
              </motion.div>
            </div>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={4}
              variants={titleVariants}
              className="text-gray-300 text-lg mb-8 mt-4"
            >
              Building innovative solutions at the intersection of technology and
              business strategy
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={titleVariants}
              className="flex space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <div className="flex space-x-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/Anuj3939"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/anuj-agrawal-4022191b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:anujagrawal.02003@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}