import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';
import { Home, User, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: Mail },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapse = () => setCollapsed(prev => !prev);

  const isActivePage = (href: string) => location.pathname === href;

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={`${collapsed ? 'w-20' : 'w-64'} h-screen bg-surface border-r border-border sticky top-16 transition-all duration-300`}
    >
      <div className="p-6">
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-surface-variant transition-colors"
          >
            {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>
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
                    flex items-center py-3 rounded-lg transition-all duration-200
                    ${collapsed ? 'justify-center px-0' : 'space-x-3 px-3'}
                    ${isActive
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-surface-variant hover:text-primary'}
                  `}
                >
                  <Icon className={`${collapsed ? 'w-5 h-5' : 'w-5 h-5'}`} />
                  {!collapsed && <span className="font-medium">{item.name}</span>}
                  {isActive && !collapsed && (
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