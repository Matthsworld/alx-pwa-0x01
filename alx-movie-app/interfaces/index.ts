export interface MovieProps {
    id: number;
    title: string;
    poster: string;
    year: string;
  }
  
  export interface MoviesProps {
    results: MovieProps[];
  }
  