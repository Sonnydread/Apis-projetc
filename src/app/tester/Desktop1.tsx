import Image from "next/image";
import InfineScrolling from "./infine-scrolling";
import Link from "next/link";

interface Movie {
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: number;
  popularity: number;
  genre_ids: number[];
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

export default async function Desktop1({ page = "1" }: { page: string | undefined }) {
  const response = await fetch(`${API_URL}&page=${page}`);
  if (!response.ok) {
    <div>{"Error fetching movies"}</div>;
  }

  const data = await response.json();
  const movies: Movie[] = data.results;

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

      <InfineScrolling serverMovies={movies} />

      <div className="flex justify-center bg-white py-8 pb-[440px]">
        <Link href={`?page=${Number(page) + 1}`} scroll={false}>
          <button
            // onClick={handleViewMore}
            className={`flex items-center gap-2 px-5 py-2 text-red-700 border-2 text-[14px] border-red-700 rounded-full hover:bg-red-100 hover:text-white transition`}
          >
            <Image src="/iconoir_cinema-old.svg" width={24} height={24} alt="cinema logo" />
            <span>View more</span>
          </button>
        </Link>
      </div>
    </>
  );
}
