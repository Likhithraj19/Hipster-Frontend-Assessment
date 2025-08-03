import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, AlertCircle } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useProducts } from '../hooks/useProducts';
import { useTheme } from '../context/ThemeContext';

export const Home: React.FC = () => {
  const { products, loading, error, refetch } = useProducts();
  const { themeConfig } = useTheme();

  const getGridClass = () => {
    switch (themeConfig.layout) {
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8';
      case 'sidebar':
        return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6';
      default:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6';
    }
  };

  return (
    <div className={`space-y-8 ${themeConfig.fontFamily}`}>
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={`
            text-4xl md:text-6xl font-bold
            ${themeConfig.layout === 'grid' ? 'text-transparent bg-clip-text theme-gradient' : 'text-foreground'}
            ${themeConfig.fontFamily}
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to ThemeSwitcher
        </motion.h1>
        
        <motion.p
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Experience three distinct themes with dynamic layouts, beautiful animations, 
          and real-time product data. Switch themes in the header to see how the entire 
          application transforms!
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="flex items-center justify-between mb-8">
          <motion.h2
            className="text-3xl font-bold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            Featured Products
          </motion.h2>
          
          {error && (
            <motion.button
              onClick={refetch}
              className="flex items-center space-x-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retry</span>
            </motion.button>
          )}
        </div>

        {loading && <LoadingSpinner />}

        {error && (
          <motion.div
            className="flex items-center justify-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-center space-y-4">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
              <h3 className="text-xl font-semibold text-foreground">Failed to load products</h3>
              <p className="text-muted-foreground max-w-md">
                {error}. Please check your internet connection and try again.
              </p>
              <button
                onClick={refetch}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover transition-colors"
              >
                Try Again
              </button>
            </div>
          </motion.div>
        )}

        {!loading && !error && products.length > 0 && (
          <motion.div
            className={getGridClass()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </motion.div>
        )}

        {!loading && !error && products.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-muted-foreground text-lg">No products found.</p>
          </motion.div>
        )}
      </motion.section>
    </div>
  );
};