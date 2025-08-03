import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { THEMES, type ThemeType } from '../types/theme';

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme, themeConfig, isTransitioning } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleThemeChange = (theme: ThemeType) => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg border border-border
          bg-surface hover:bg-surface-variant transition-colors duration-200
          text-foreground font-medium ${themeConfig.fontFamily}
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isTransitioning}
      >
        <Palette className="w-4 h-4" />
        <span className="hidden sm:inline">{themeConfig.displayName}</span>
        <span className="sm:hidden">Theme</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full right-0 mt-2 w-64 bg-surface border border-border rounded-lg shadow-lg z-50 overflow-hidden"
            >
              {Object.values(THEMES).map((theme) => (
                <motion.button
                  key={theme.type}
                  onClick={() => handleThemeChange(theme.type)}
                  className={`
                    w-full text-left px-4 py-3 hover:bg-surface-variant transition-colors
                    ${currentTheme === theme.type ? 'bg-primary/10 border-l-4 border-l-primary' : ''}
                  `}
                  whileHover={{ x: 4 }}
                  disabled={isTransitioning}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-foreground">{theme.displayName}</div>
                      <div className="text-sm text-muted-foreground">{theme.description}</div>
                    </div>
                    {currentTheme === theme.type && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 bg-primary rounded-full"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};