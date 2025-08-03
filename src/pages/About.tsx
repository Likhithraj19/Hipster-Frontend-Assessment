import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layers, Zap, Code, Sparkles, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const About: React.FC = () => {
  const { themeConfig } = useTheme();

  const features = [
    {
      icon: Palette,
      title: 'Three Unique Themes',
      description: 'Minimal Light, Dark Elegant, and Vibrant Fun themes with distinct personalities.',
      color: 'text-primary'
    },
    {
      icon: Layers,
      title: 'Dynamic Layouts',
      description: 'Each theme features different layouts: stack, sidebar, and grid arrangements.',
      color: 'text-accent'
    },
    {
      icon: Zap,
      title: 'Smooth Animations',
      description: 'Framer Motion powered animations that adapt to each theme\'s personality.',
      color: 'text-warning'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Built with React, TypeScript, Tailwind CSS, and modern web standards.',
      color: 'text-success'
    }
  ];

  const themes = [
    {
      name: 'Minimal Light',
      description: 'Clean, professional design with generous white space and subtle animations.',
      features: ['Sans-serif typography', 'Vertical stack layout', 'Fade-in animations', 'Light color palette']
    },
    {
      name: 'Dark Elegant',
      description: 'Sophisticated dark mode with bold serif fonts and sidebar navigation.',
      features: ['Serif typography', 'Sidebar layout', 'Slide animations', 'High contrast colors']
    },
    {
      name: 'Vibrant Fun',
      description: 'Playful and colorful with rounded elements and bouncy animations.',
      features: ['Playful typography', 'Card-based grid', 'Bounce animations', 'Vibrant colors']
    }
  ];

  return (
    <div className={`space-y-16 ${themeConfig.fontFamily}`}>
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center space-x-2 text-primary bg-primary/10 px-4 py-2 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">About ThemeSwitcher</span>
        </motion.div>
        
        <motion.h1
          className={`
            text-4xl md:text-6xl font-bold text-foreground
            ${themeConfig.fontFamily}
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Built for Hipster{' '}
          <motion.span
            className="text-destructive"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="inline w-16 h-16 fill-current mb-4" />
          </motion.span>
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
         This project was built for Hipster as part of a frontend developer assignment, demonstrating skills in modern UI design and interactive components.
        </motion.p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Key Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-surface border border-border rounded-lg p-6 theme-shadow hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`${feature.color} bg-surface-variant p-3 rounded-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-foreground text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          Theme Showcase
        </motion.h2>
        
        <div className="space-y-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.name}
              className="bg-surface border border-border rounded-lg p-8 theme-shadow"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {theme.name}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                    {theme.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {theme.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center space-x-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center">
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-primary-foreground text-2xl font-bold">
                      {index + 1}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.3 }}
        >
          Built With Modern Technology
        </motion.h2>
        
        <motion.div
          className="bg-surface border border-border rounded-lg p-8 theme-shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((tech, index) => (
              <motion.div
                key={tech}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">
                    {tech.charAt(0)}
                  </span>
                </div>
                <p className="font-medium text-foreground">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};