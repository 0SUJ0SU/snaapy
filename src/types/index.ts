export type Theme = 'light' | 'dark';

export interface Frame {
  id: string;
  name: string;
  category: 'classic' | 'vintage' | 'minimalist' | 'fun' | 'seasonal' | 'elegant';
  image: string;
  thumbnail: string;
}

export interface Filter {
  id: string;
  name: string;
  className: string;
}

export type GridType = '1x1' | '1x4' | '4x1' | '2x2';

export interface Capture {
  id: string;
  type: 'photo' | 'video';
  url: string;
  timestamp: string;
  gridType: GridType;
  filter?: string;
  frameId?: string;
}
