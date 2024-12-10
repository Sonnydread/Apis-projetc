import React from "react";
import Image from "next/image";

export default function Desktop1() {

    const movies = [
        {
          id: 1,
          title: "Stranger Things",
          year: "USA, 2016 - Current",
          imdbScore: 86.0,
          userScore: 97,
          genres: "Action, Adventure, Horror",
          image: "/Poster1.png",
        },
        {
          id: 2,
          title: "Batman Begins",
          year: "USA, 2005",
          imdbScore: 82.0,
          userScore: 70,
          genres: "Action, Adventure",
          image: "/Poster2.png",
        },
        {
          id: 3,
          title: "Spider-Man: Into The Spider-Verse",
          year: "USA, 2018",
          imdbScore: 84,
          userScore: 87,
          genres: "Animation, Action, Adventure",
          image: "/Poster3.png",
        },
        {
          id: 4,
          title: "Dunkirk",
          year: "USA, 2017",
          imdbScore: 78,
          userScore: 94,
          genres: "Action, Drama, History",
          image: "/Poster4.png",
        },
      ];    

      const linesmovies = [...movies, ...movies, ...movies];

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
    <button className="text-gray-500 text-[16px}] hover:text-black">
      Premiere
    </button>
    <button className="text-gray-500 text-[16px] hover:text-black">
      For release
    </button>
  </div>
</div>

<div className="px-[96px] py-8 bg-white">
        <div className="grid grid-cols-4 gap-[80px]">
          {linesmovies.map((movie, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={movie.image}
                  width={300}
                  height={450}
                  alt={movie.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">{movie.year}</p>
                <h3 className="text-black font-bold text-lg">{movie.title}</h3>
                <div className="flex items-center justify-between my-2">

                <div className="flex items-center space-x-2">
              <span className="text-black rounded-md px-2 bg-yellow-500 font-bold">
                IMDB
              </span>
              <span className="text-black">{movie.imdbScore}/100</span>
            </div>
            <span className="text-gray-800">
              {movie.userScore}%
            </span>
          </div>
                <p className="text-gray-500 text-sm">{movie.genres}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center bg-white py-8 pb-[440px]">
        <button className="flex items-center gap-2 px-5 py-2 text-red-700 border-2 text-[14px]  border-red-700 rounded-full hover:bg-red-100 hover:text-white transition">
            <Image
                src="/iconoir_cinema-old.svg"
                width={24}
                height={24}
                alt="ciname logo"
                />
          <span>View more</span>
        </button>
      </div>
    </>
  );
}

