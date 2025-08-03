import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const LoadingSpinner: React.FC = () => {
  const { themeConfig } = useTheme();

  const getSpinnerVariant = () => {
    switch (themeConfig.animations.type) {
      case 'bounce':
        return {
          animate: { 
            scale: [1, 1.2, 1],
            rotate: 360
          },
          transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut' as const
          }
        };
      case 'slide':
        return {
          animate: { 
            rotate: 360,
            x: [0, 10, 0, -10, 0]
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'linear' as const
          }
        };
      default:
        return {
          animate: { rotate: 360 },
          transition: {
            duration: 1,
            repeat: Infinity,
            ease: 'linear' as const
          }
        };
    }
  };

  const spinner = getSpinnerVariant();

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <motion.div
        className="w-12 h-12 border-4 border-muted border-t-primary rounded-full"
        animate={spinner.animate}
        transition={spinner.transition}
      />
      <motion.p
        className="mt-4 text-muted-foreground font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Loading products...
      </motion.p>
    </div>
  );
};