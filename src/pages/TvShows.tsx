import { useEffect, useState } from "react"
import { getPopularTVShows, getTVShowsByGenre } from "../services/tmdb"
import MovieRow from "../components/movieRows/MovieRow"

function TvShows() {

   
    const[popularTV, setPopularTV] = useState<any[]>([])
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
        setPopularTV(await getPopularTVShows())
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
    <div>
      <div className="p-4">
      
      <MovieRow title="Populares na TV" movies={popularTV} />
      <MovieRow title="Serie de Romance" movies={romanceTV} />
      <MovieRow title="Serie de Animação" movies={animationTV} />
      <MovieRow title="Serie de Ação e Aventura" movies={actionTV} />
      <MovieRow title="Serie de Drama" movies={dramaTV} />
      <MovieRow title="Serie de Comédia" movies={comedyTV} />
      <MovieRow title="Serie de Ficção Científica" movies={fantasyTV} />
      <MovieRow title="Serie de Mistério" movies={mysteryTV} />
      <MovieRow title="Serie de Documentário" movies={documentaryTV} />
      <MovieRow title="Serie de Crime" movies={crimeTV} />



    </div>
    </div>
  );
}

export default TvShows;