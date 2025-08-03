import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { type Product } from '../types/theme';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { themeConfig } = useTheme();
  
  const getAnimationVariant = () => {
    switch (themeConfig.animations.type) {
      case 'bounce':
        return {
          initial: { opacity: 0, scale: 0.8, y: 50 },
          animate: { opacity: 1, scale: 1, y: 0 },
          whileHover: { scale: 1.05, y: -5 },
          whileTap: { scale: 0.98 }
        };
      case 'slide':
        return {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          whileHover: { x: 5, scale: 1.02 },
          whileTap: { scale: 0.98 }
        };
      case 'scale':
        return {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          whileHover: { scale: 1.03 },
          whileTap: { scale: 0.97 }
        };
      default:
        return {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          whileHover: { y: -2 },
          whileTap: { scale: 0.98 }
        };
    }
  };

  const animation = getAnimationVariant();

  const cardClass = themeConfig.layout === 'grid' 
    ? 'bg-surface border border-border rounded-2xl p-6 theme-shadow hover:shadow-lg'
    : 'bg-surface border border-border rounded-lg p-6 theme-shadow hover:shadow-md';

  return (
    <motion.div
      className={`${cardClass} transition-all duration-300 overflow-hidden group`}
      initial={animation.initial}
      animate={animation.animate}
      whileHover={animation.whileHover}
      whileTap={animation.whileTap}
      transition={{
        duration: parseFloat(themeConfig.animations.duration) / 1000,
        delay: index * 0.1,
        ease: themeConfig.animations.easing === 'ease-out' ? 'easeOut' : 'easeInOut'
      }}
    >
      <div className="relative mb-4 overflow-hidden rounded-lg bg-white">
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
          }}
        />
        <motion.div
          className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          ${product.price.toFixed(2)}
        </motion.div>
      </div>

      <div className="space-y-3">
        <div>
          <motion.p
            className="text-sm text-muted-foreground capitalize mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            {product.category}
          </motion.p>
          <motion.h3
            className="font-semibold text-foreground line-clamp-2 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.25 }}
          >
            {product.title}
          </motion.h3>
        </div>

        <motion.p
          className="text-sm text-muted-foreground line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {product.description}
        </motion.p>


        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.35 }}
        >
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating.rate)
                    ? 'text-warning fill-current'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {product.rating.rate} ({product.rating.count})
          </span>
        </motion.div>


        <motion.button
          className={`
            w-full bg-primary text-primary-foreground hover:bg-primary-hover
            px-4 py-2 rounded-lg font-medium transition-colors duration-200
            flex items-center justify-center space-x-2
            ${themeConfig.layout === 'grid' ? 'rounded-xl' : 'rounded-lg'}
          `}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
};