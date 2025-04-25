
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movies'
import TvShows from './pages/TvShows'

function App() {

  return (
    <div className="bg-black text-white min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movie />} />
          <Route path="/series" element={<TvShows />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
