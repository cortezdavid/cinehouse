import { useEffect, useState } from "react"
import { Pagination, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import options from '../../config/apiOptions'
import MovieCard from "../MovieCard/MovieCard";


const MovieCardContainer = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([])
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=1', options)
      .then(response => response.json())
      .then(response => setTopRatedMovies(response.results))
      .catch(error => console.error(error))
  }, [])

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={5}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 5,
          spaceBetween: 60,
        }
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper h-auto pb-10"
    >
      {
        topRatedMovies.map(topRatedMovie => (
          <SwiperSlide key={topRatedMovie.id}>
            <MovieCard movieCard={topRatedMovie}/>
          </SwiperSlide>
        ))
      }

    </Swiper>
  )
}

export default MovieCardContainer