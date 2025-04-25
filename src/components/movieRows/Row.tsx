interface Props {
    title: string
    movies: any[]
  }
  
  function Row({ title, movies }: Props) {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          {movies.map((item, i) => (
            <div key={i} className="min-w-[180px] rounded overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto object-cover rounded-lg"
              />
              <p className="text-sm mt-1 truncate text-center">
                {item.title || item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default Row
  