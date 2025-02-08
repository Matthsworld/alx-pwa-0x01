export interface MovieProps {
    id: number;
    title: string;
    poster: string;
    year: string;
  }
  
  export interface MoviesProps {
    results: MovieProps[];
  }

  export { ButtonProps } from "./button";

  export { ComponentProps } from "./componentProps";
