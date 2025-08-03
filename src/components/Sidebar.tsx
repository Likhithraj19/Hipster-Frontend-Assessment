import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { Home, User, Mail } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className="w-64 h-screen bg-surface border-r border-border sticky top-16"
    >
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Navigation</h2>
            <p className="text-sm text-muted-foreground">Dark theme sidebar</p>
          </div> */}
        </div>

        <nav className="space-y-2">
          {navigation.map((item, index) => {
            const Icon = item.icon;
            const isActive = isActivePage(item.href);
            
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  className={`
                    flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200
                    ${isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-surface-variant hover:text-primary'
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="sidebarActive"
                      className="ml-auto w-2 h-2 bg-primary-foreground rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
};