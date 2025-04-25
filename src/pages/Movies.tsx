import { useEffect, useState } from "react"
import { getLatestMovies, getMoviesByGenres, getPopularMovies } from "../services/tmdb"
import MovieRow from "../components/movieRows/MovieRow"

function Movie() {

    const [popular, setPopular] = useState<any[]>([])
    const [latest, setLatest] = useState<any[]>([])
    const [terror, setTerror] = useState<any[]>([])
    const [action, setAction] = useState<any[]>([])
    const [comedy, setComedy] = useState<any[]>([])
    const [drama, setDrama] = useState<any[]>([])
    const [romance, setRomance] = useState<any[]>([])
    const [animation, setAnimation] = useState<any[]>([])
    const [documentary, setDocumentary] = useState<any[]>([])
    const [fantasy, setFantasy] = useState<any[]>([])
    const [thriller, setThriller] = useState<any[]>([])
    const [mystery, setMystery] = useState<any[]>([])
    const [adventure, setAdventure] = useState<any[]>([])
    const [crime, setCrime] = useState<any[]>([])
    const [family, setFamily] = useState<any[]>([])
    const [history, setHistory] = useState<any[]>([])
 
  
    useEffect(() => {
      async function fetchData() {
        setPopular(await getPopularMovies())
        setLatest(await getLatestMovies())
        setTerror(await getMoviesByGenres(27))
        setAction(await getMoviesByGenres(28))
        setComedy(await getMoviesByGenres(35))
        setDrama(await getMoviesByGenres(18))
        setRomance(await getMoviesByGenres(10749))
        setAnimation(await getMoviesByGenres(16))
        setDocumentary(await getMoviesByGenres(99))
        setFantasy(await getMoviesByGenres(14))
        setThriller(await getMoviesByGenres(53))
        setMystery(await getMoviesByGenres(9648))
        setAdventure(await getMoviesByGenres(12))
        setCrime(await getMoviesByGenres(80))
        setFamily(await getMoviesByGenres(10751))
        setHistory(await getMoviesByGenres(36))
      }
      fetchData()
    }, [])
  
  
  
  return (
    <div>
      <div className="p-4">
      
      <MovieRow title="Populares" movies={popular} />
      <MovieRow title="Terror" movies={terror} />
      <MovieRow title="Ação" movies={action} />
      <MovieRow title="Comédia" movies={comedy} />
      <MovieRow title="Drama" movies={drama} />
      <MovieRow title="Romance" movies={romance} />
      <MovieRow title="Animação" movies={animation} />
      <MovieRow title="Documentário" movies={documentary} />
      <MovieRow title="Fantasia" movies={fantasy} />
      <MovieRow title="Suspense" movies={thriller} />
      <MovieRow title="Mistério" movies={mystery} />
      <MovieRow title="Aventura" movies={adventure} />
      <MovieRow title="Crime" movies={crime} />
      <MovieRow title="Família" movies={family} />
      <MovieRow title="História" movies={history} />
      <MovieRow title="Lançamentos" movies={latest} />


    </div>
    </div>
  )
}

export default Movie