export type ThemeType = 'minimal' | 'dark' | 'vibrant';

export interface ThemeConfig {
  name: string;
  type: ThemeType;
  displayName: string;
  description: string;
  className: string;
  fontFamily: string;
  layout: 'stack' | 'sidebar' | 'grid';
  animations: {
    duration: string;
    easing: string;
    type: 'fade' | 'slide' | 'bounce' | 'scale';
  };
}

export const THEMES: Record<ThemeType, ThemeConfig> = {
  minimal: {
    name: 'minimal',
    type: 'minimal',
    displayName: 'Minimal Light',
    description: 'Clean, professional, spacious design',
    className: '',
    fontFamily: 'font-inter',
    layout: 'stack',
    animations: {
      duration: '300ms',
      easing: 'ease-out',
      type: 'fade'
    }
  },
  dark: {
    name: 'dark',
    type: 'dark',
    displayName: 'Dark Elegant',
    description: 'Sophisticated, bold, high contrast',
    className: 'theme-dark',
    fontFamily: 'font-playfair',
    layout: 'sidebar',
    animations: {
      duration: '400ms',
      easing: 'ease-in-out',
      type: 'slide'
    }
  },
  vibrant: {
    name: 'vibrant',
    type: 'vibrant',
    displayName: 'Vibrant Fun',
    description: 'Playful, colorful, energetic',
    className: 'theme-vibrant',
    fontFamily: 'font-pacifico',
    layout: 'grid',
    animations: {
      duration: '250ms',
      easing: 'ease-out',
      type: 'bounce'
    }
  }
};

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}