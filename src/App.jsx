import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import MovieDetails from './components/MovieDetails/MovieDetails'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Navbar from './components/Navbar/Navbar';
import SearchResults from './components/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movie/:id' element={<MovieDetails />} />
        <Route exact path='/search/:search' element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
