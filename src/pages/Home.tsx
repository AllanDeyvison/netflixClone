import { useEffect, useState } from "react";
import MovieRow from "../components/movieRows/MovieRow";
import { getLatestMovies, getMoviesByGenres, getPopularMovies, getPopularTVShows, getTVShowsByGenre } from "../services/tmdb";

function Home() {
  const [popular, setPopular] = useState<any[]>([])
  const[popularTV, setPopularTV] = useState<any[]>([])
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
  const [comedyTV, setComedyTV] = useState<any[]>([])
  const [actionTV, setActionTV] = useState<any[]>([])
  const [dramaTV, setDramaTV] = useState<any[]>([])
  const [romanceTV, setRomanceTV] = useState<any[]>([])
  const [animationTV, setAnimationTV] = useState<any[]>([])
  const [documentaryTV, setDocumentaryTV] = useState<any[]>([])
  const [fantasyTV, setFantasyTV] = useState<any[]>([])
  const [mysteryTV, setMysteryTV] = useState<any[]>([])
  const [crimeTV, setCrimeTV] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      setPopular(await getPopularMovies())
      setPopularTV(await getPopularTVShows())
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
      setComedyTV(await getTVShowsByGenre(35))
      setActionTV(await getTVShowsByGenre(10759))
      setDramaTV(await getTVShowsByGenre(18))
      setRomanceTV(await getTVShowsByGenre(10749))
      setAnimationTV(await getTVShowsByGenre(16))
      setDocumentaryTV(await getTVShowsByGenre(99))
      setFantasyTV(await getTVShowsByGenre(10765))
      setMysteryTV(await getTVShowsByGenre(9648))
      setCrimeTV(await getTVShowsByGenre(80))
    }
    fetchData()
  }, [])


  return (
    <>
     <div className="p-4">

      <MovieRow title="Populares" movies={popular} />
      <MovieRow title="Populares na TV" movies={popularTV} />
      <MovieRow title="Terror" movies={terror} />
      <MovieRow title="Serie de Romance" movies={romanceTV} />
      <MovieRow title="Serie de Animação" movies={animationTV} />
      <MovieRow title="Ação" movies={action} />
      <MovieRow title="Serie de Ação e Aventura" movies={actionTV} />
      <MovieRow title="Comédia" movies={comedy} />
      <MovieRow title="Serie de Drama" movies={dramaTV} />
      <MovieRow title="Drama" movies={drama} />
      <MovieRow title="Serie de Comédia" movies={comedyTV} />
      <MovieRow title="Romance" movies={romance} />
      <MovieRow title="Animação" movies={animation} />
      <MovieRow title="Serie de Ficção Científica" movies={fantasyTV} />
      <MovieRow title="Documentário" movies={documentary} />
      <MovieRow title="Fantasia" movies={fantasy} />
      <MovieRow title="Serie de Mistério" movies={mysteryTV} />
      <MovieRow title="Suspense" movies={thriller} />
      <MovieRow title="Mistério" movies={mystery} />
      <MovieRow title="Aventura" movies={adventure} />
      <MovieRow title="Crime" movies={crime} />
      <MovieRow title="Família" movies={family} />
      <MovieRow title="História" movies={history} />
      <MovieRow title="Serie de Documentário" movies={documentaryTV} />
      <MovieRow title="Serie de Crime" movies={crimeTV} />
      <MovieRow title="Lançamentos" movies={latest} />


    </div>
    </>
  );
}

export default Home;