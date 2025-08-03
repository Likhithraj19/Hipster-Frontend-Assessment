import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { useTheme } from '../context/ThemeContext';

export const Layout: React.FC = () => {
  const { themeConfig, isTransitioning } = useTheme();
  const showSidebar = themeConfig.layout === 'sidebar';

  return (
    <div className={`min-h-screen ${themeConfig.fontFamily} transition-all duration-300`}>
      <Header />
      
      <div className="pt-16 flex">
        <AnimatePresence>
          {showSidebar && (
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="hidden lg:block"
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.main
          className={`
            flex-1 min-h-screen
            ${showSidebar ? 'lg:ml-0' : ''}
            ${isTransitioning ? 'opacity-50' : 'opacity-100'}
            transition-opacity duration-300
          `}
          key={themeConfig.type} 
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Outlet />
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};