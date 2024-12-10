"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

export default function Desktop1() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  // Función para obtener datos de la API
  const fetchMovies = async (pageNumber = 1) => {
    try {
      setLoading(true); // Indica que se están cargando datos
      const response = await fetch(`${API_URL}&page=${pageNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...data.results]); // Agrega nuevas películas
    } catch (error: any) {
      alert(`Error fetching movies: ${error}`);
    } finally {
      setLoading(false); // Finaliza la carga
    }
  };

  // Efecto para llamar la API al montar el componente
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-white px-[96px] py-4">
        <div className="flex items-center gap-[13px]">
          <Image src="/tv.png" width={50} height={50} alt="tv logo" />
          <h1 className="text-black font-bold text-[24px]">MovieBox</h1>
        </div>
        <div className="flex-grow max-w-[525px]">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full px-4 py-2 border rounded-[6px] border-gray-400 text-[16px] text-gray-700"
          />
        </div>
        <div className="flex items-center space-x-6">
          <p className="text-black text-[16px]">Sign in</p>
          <div className="w-[36px] h-[36px] bg-red-500 rounded-full flex items-center justify-center">
            <div className="text-white text-lg font-bold">=</div>
          </div>
        </div>
      </div>

      <div className="px-[96px] py-8 bg-white flex items-center space-x-6">
        <h2 className="text-black font-bold text-[36px] mr-[72px]">Movie listings</h2>
        <div className="flex space-x-6">
          <button className="text-black text-[16px] relative">
            Popular
            <span className="w-10 h-0.5 bg-red-500 absolute bottom-0 left-0"></span>
          </button>
          <button className="text-gray-500 text-[16px] hover:text-black">Premiere</button>
          <button className="text-gray-500 text-[16px] hover:text-black">For release</button>
        </div>
      </div>

      <div className="px-[96px] py-8 bg-white">
        {loading && (
          <div className="h-screen w-screen bg-black flex items-center justify-center animate-pulse">Loading...</div>
        )}
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

      <div className="flex justify-center bg-white py-8 pb-[440px]">
        <button
          // onClick={handleViewMore}
          className={`flex items-center gap-2 px-5 py-2 text-red-700 border-2 text-[14px] border-red-700 rounded-full hover:bg-red-100 hover:text-white transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading} // Desactiva el botón si está cargando
        >
          <Image src="/iconoir_cinema-old.svg" width={24} height={24} alt="cinema logo" />
          <span>{loading ? "Loading..." : "View more"}</span>
        </button>
      </div>
    </>
  );
}
