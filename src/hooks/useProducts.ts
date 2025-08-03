import { useState, useEffect } from 'react';
import axios from 'axios';
import { type Product } from '../types/theme';

interface UseProductsReturn {
  products: Product[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get<Product[]>('https://fakestoreapi.com/products', {
        timeout: 10000,
        headers: {
          'Accept': 'application/json',
        }
      });
      
      if (Array.isArray(response.data)) {
        const validatedProducts = response.data.map(product => ({
          ...product,
          title: typeof product.title === 'string' ? product.title : 'Unknown Product',
          price: typeof product.price === 'number' ? product.price : 0,
          description: typeof product.description === 'string' ? product.description : '',
          category: typeof product.category === 'string' ? product.category : 'uncategorized',
          image: typeof product.image === 'string' ? product.image : '',
          rating: {
            rate: typeof product.rating?.rate === 'number' ? product.rating.rate : 0,
            count: typeof product.rating?.count === 'number' ? product.rating.count : 0,
          }
        }));
        
        setProducts(validatedProducts);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  };
};