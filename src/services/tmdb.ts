
import axios from 'axios'

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGM4MTdmZThlNTNlNjdlZDNmZWM0MTQyMDFmODE5MiIsIm5iZiI6MTc0NTE5NTgxMS45MTY5OTk4LCJzdWIiOiI2ODA1OTMyMzNmODg4NTRjNDllZTQyNzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.20kUCImvWiKCKuBF_ly8lcIvjWc9amlUM1jno-mQ6TM',
  },
})

interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  popularity: number; // Added popularity property
}

interface MoviesResponse {
  results: Movie[];
}

export const getPopularMovies = async (): Promise<Movie[]> => {
  const res = await tmdb.get<MoviesResponse>('/movie/popular');
  return res.data.results;
}

export const getPopularTVShows = async (): Promise<Movie[]> => {
  const res = await tmdb.get<MoviesResponse>('/tv/popular');
  return res.data.results;
}


export const getLatestMovies = async () => {
    const res = await tmdb.get<MoviesResponse>('/discover/movie', {
      params: {
        sort_by: 'release_date.desc',
        'primary_release_date.lte': new Date().toISOString().split('T')[0],
      }
    })
    return res.data.results
  }

export const getMoviesByGenres = async (genreId: number): Promise<Movie[]> => {
    const res = await tmdb.get<MoviesResponse>('/discover/movie',{
        params: {with_genres: genreId,sort_by: 'popularity.desc'},}
    );
    return res.data.results;
  }

  export const getTVShowsByGenre = async (genreId: number): Promise<Movie[]> => {
    const res = await tmdb.get<MoviesResponse>('/discover/tv', {
      params: {
        with_genres: genreId,
        sort_by: 'popularity.desc',
      }
    })
    return res.data.results
  }

  export const getPopularContent = async () => {
    const [movies, series] = await Promise.all([
      tmdb.get<MoviesResponse>('/movie/popular'),
      tmdb.get<MoviesResponse>('/tv/popular'),
    ])
  
    // Adiciona um tipo para cada item (útil pra exibir depois)
    const movieData = movies.data.results.map(item => ({ ...item, type: 'movie' }))
    const seriesData = series.data.results.map(item => ({ ...item, type: 'tv' }))
  
    // Junta e ordena por popularidade (opcional)
    const all = [...movieData, ...seriesData].sort((a, b) => b.popularity - a.popularity)
  
    return all
  }
  
