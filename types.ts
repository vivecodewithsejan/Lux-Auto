
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  miles: string;
  transmission: string;
  price: number;
  imageUrl: string;
  status?: 'JUST ARRIVED' | 'RESERVED' | 'SOLD';
  description?: string;
}

export interface FilterState {
  make: string;
  model: string;
  maxPrice: number;
}
