import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import options from '../../config/apiOptions'
import Loading from "../Loading/Loading";
import SerieBanner from "../SerieBanner/SerieBanner";


const SerieBannerContainer = () => {

  const [popularSeries, setPopularSeries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/tv/popular?language=es-Mx&page=1', options)
      .then(response => response.json())
      .then(response => {
        setPopularSeries(response.results)
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
            {popularSeries.map(popularSerie =>
              <SwiperSlide key={popularSerie.id}
                style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w1280${popularSerie.backdrop_path}")` }}
                className="bg-center bg-cover bg-no-repeat h-[450px]">
                <SerieBanner serieBanner={popularSerie} />
              </SwiperSlide>
            )}
          </Swiper>)
      }
    </>
  )
}

export default SerieBannerContainer