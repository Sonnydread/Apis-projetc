import React from "react";
import Image from "next/image";

export default function Desktop2() {

    const movies = [
        {
          title: "TOP GUN: Maverick",
          img: "/img1.png",
          rating: 4.6,
          genre: "Action • Movie",
        },
        {
          title: "Spiderman: Into the Spider-Verse",
          img: "/img2.png",
          rating: 4.6,
          genre: "Action • Movie",
        },
        {
          title: "Black Panther: Wakanda Forever",
          img: "/img3.png",
          rating: 4.6,
          genre: "Action • Movie",
        },
        {
          title: "Batman V Superman",
          img: "/img4.png",
          rating: 4.6,
          genre: "Action • Movie",
        },
        {
          title: "Red Notice",
          img: "/img5.png",
          rating: 4.6,
          genre: "Action • Movie",
        },
      ];
    
  return (
    <>
    <div className="relative w-full h-[648px]">
      <Image
        src="/portda.jpg"
        fill
        alt="portada"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-4 flex items-center justify-between px-[96px] py-4 w-full">
        <div className="flex items-center gap-[13px]">
          <Image src="/tv.png" width={50} height={50} alt="tv logo" />
          <h1 className="text-white font-bold text-[24px]">MovieBox</h1>
        </div>
        <div className="flex-grow max-w-[525px]">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full px-4 py-2 border-2 bg-transparent rounded-[6px] border-white text-[16px] text-white placeholder-white"
          />
        </div>

        
        <div className="flex items-center space-x-6">
          <p className="text-white text-[16px]">Sign in</p>
          <div className="w-[36px] h-[36px] bg-red-500 rounded-full flex items-center justify-center">
            <div className="text-white text-[18px] font-bold">=</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent text-white px-[96px] py-8">
        <div>
          <span className="bg-gray-800 p-3 px-5 text-[14px] rounded-full">Series</span>
          <h1 className="text-4xl font-bold mt-4">The Last Of Us</h1>
          <p className="text-lg text-gray-300 mt-2">
            9 Episodes • 2022 • Fantasy • Actions
          </p>
        </div>
        <div className="flex items-center gap-4 mt-6 pb-[64px]">
          <button className="flex items-center gap-2 px-6 py-3 bg-red-600 rounded-full text-white font-semibold">
            <span>▶</span> Continue Watching
          </button>
          <button className="flex items-center gap-2 px-6 py-3 border-[1px] border-white rounded-full text-white font-semibold">
            📄  Add Watchlist
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 border-[1px] border-gray-300 rounded-md text-white">
              ⬇️ Download
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 border-[1px] border-gray-300 rounded-md text-white">
              🔗 Share
            </button>
            <button className="flex items-center gap-2 px-6 py-2 bg-gray-900 border-[1px] border-gray-300 rounded-md text-white">
              👍 Like
            </button>
          </div>
        </div>
    </div>
      </div>
      <div className="bg-white text-[16px] text-black pt-[42px] pb-[24px] px-[72px] flex-nowrap">
        <p>The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States...<span className="text-red-500 cursor-pointer">More</span></p>
        <p className="pt-[24px] text-bold text-[22px]">Top Cast</p>
        <Image
        src="/Stream.png"
        width={1590}
        height={47}
        alt="stream"
        className="w-full h-full object-cover pt-[16px]"
        />
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 pt-[44px]">Media</h2>
        <div className="flex items-center gap-8 pt-[20px]">
          <button className="border-b-2 border-red-500 text-red-500 font-bold pb-1">Most Popular</button>
          <button className="text-gray-500 font-semibold pb-1">Videos</button>
          <button className="text-gray-500 font-semibold pb-1">Backdrops</button>
          <button className="text-gray-500 font-semibold pb-1">Posters</button>
        </div>
      </div>
      <Image
        src="/Rectan.png"
        width={1296}
        height={480}
        alt="stream"
        className="w-full h-full object-cover pt-[48px]"
        />
        </div>
      
        <div className="px-[72px] py-8 bg-white pb-[274px]">
      <h2 className="text-xl text-black font-bold mb-6">Similar Movies for you</h2>
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="flex flex-col items-start">
            <div className="w-full h-[200px] overflow-hidden rounded-lg shadow-md">
              <Image
                src={movie.img}
                alt={movie.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-sm font-bold mt-4 text-start text-black">{movie.title}</h3>
            <p className="text-gray-500 text-sm mt-2 flex">
              <span className="text-black mr-2">⭐ {movie.rating}</span> {movie.genre}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
