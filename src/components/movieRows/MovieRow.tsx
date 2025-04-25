import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type Props = {
    title: string;
    movies: any[];
  };
  
  function MovieRow({ title, movies }: Props) {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
          const { scrollLeft, clientWidth } = scrollRef.current
          const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
          scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
      }

    return (
        <>
      <section className="mb-6 relative ">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>

        <div className="group relative">
  
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="text-white" />
        </button>

        <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar space-x-4 scroll-smooth ">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-40 h-60 object-cover rounded-md hover:scale-105 hover:z-10 transition-transform duration-300"
            />
          ))}
        </div>

    
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="text-white" />
        </button>
      </div>

        {/* <div className="flex overflow-x-auto space-x-4 pb-2">
          {movies.map((movie, index) => (
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="w-40 h-60 object-cover rounded-md hover:scale-105 transition-transform"
            />
          ))}
        </div> */}
      </section>
    </>
    )
  }
  
  export default MovieRow;
  