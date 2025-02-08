import React from "react";

interface MovieCardProps {
  title: string;
  poster: string;
  year: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, year }) => {
  return (
    <div className="rounded-lg shadow-lg overflow-hidden bg-white">
      <img src={poster} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
