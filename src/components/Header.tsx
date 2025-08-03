import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { ThemeSelector } from './ThemeSelector';
import { useTheme } from '../context/ThemeContext';

export const Header: React.FC = () => {
  const { themeConfig } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`
        fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-border
        ${themeConfig.fontFamily} transition-all duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="flex items-center space-x-2 text-primary font-bold text-xl"
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >

              </motion.div>
              <span className="hidden sm:inline">ThemeSwitcher App</span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                <Link
                  to={item.href}
                  className={`
                    relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                    ${isActivePage(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-surface-variant'
                    }
                  `}
                >
                  {item.name}
                  {isActivePage(item.href) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSelector />
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-foreground hover:bg-surface-variant transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-surface"
          >
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-4 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActivePage(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-surface-variant'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};