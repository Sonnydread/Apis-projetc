"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

export default function InfineScrolling({ serverMovies }: { serverMovies: Movie[] }) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setMovies((prev) => [...prev, ...serverMovies]);
  }, [serverMovies]);

  return (
    <div className="px-[96px] py-8 bg-white">
      <div className="grid grid-cols-4 gap-[80px]">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white overflow-hidden">
            <div className="relative">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                width={300}
                height={450}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">{movie.release_date}</p>
              <h3 className="text-black font-bold text-lg">{movie.title}</h3>
              <div className="flex items-center justify-between my-2">
                <div className="flex items-center space-x-2">
                  <span className="text-black rounded-md px-2 bg-yellow-500 font-bold">IMDB</span>
                  <span className="text-black">{movie.vote_average}/10</span>
                </div>
                <span className="text-gray-800">{Math.round(movie.popularity)}%</span>
              </div>
              <p className="text-gray-500 text-sm">
                {movie.genre_ids.join(", ")} {/* Esto depende de la API */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
