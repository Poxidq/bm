export interface Rating {
  source: string;
  value: string;
}

export interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  rating: string;
  year: string;
  genre: string;
  released: string;
  country: string;
  runtime: string;
  plot: string;
  ratings: Rating[];
  directors: string[];
  writers: string[];
  actors: string[];
  review?: string;
}
