export interface MovieProps {
    id: number;
    title: string;
    poster: string;
    year: string;
  }
  
  export interface MoviesProps {
    results: MovieProps[];
  }

  export interface ButtonProps {
    title: string;
    action?: () => void;  // Optional function
  }  
  
  export interface ComponentProps {
    children: React.ReactNode;
  }
  