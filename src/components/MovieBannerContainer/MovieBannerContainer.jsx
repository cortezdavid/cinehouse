import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import MovieBanner from "../MovieBanner/MovieBanner";
import options from '../../config/apiOptions'
import Loading from "../Loading/Loading";

const MovieBannerContainer = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=es-Mx&page=1', options)
      .then(response => response.json())
      .then(response => {
        setPopularMovies(response.results)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      });
  }, []);

  return (
    <>
      {
        loading ?
          (<Loading />) :
          (<Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {popularMovies.map(popularMovie =>
              <SwiperSlide key={popularMovie.id}
                style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${popularMovie.backdrop_path}")` }}
                className="bg-center bg-cover bg-no-repeat h-[450px]">
                <MovieBanner movieBanner={popularMovie} />
              </SwiperSlide>
            )}
          </Swiper>)
      }
    </>

  )
}

export default MovieBannerContainer