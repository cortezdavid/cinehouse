import Form from "../Form/Form"
import MovieBannerContainer from "../MovieBannerContainer/MovieBannerContainer"
import MovieCardContainer from "../MovieCardContainer/MovieCardContainer"
import SerieBannerContainer from "../SerieBannerContainer/SerieBannerContainer"

const Home = () => {
  return (
    <>
      <div className="relative h-screen-minus-72">
        <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
        <div className="relative bg-[url('./fondo.jpg')] bg-cover bg-center bg-no-repeat h-full flex flex-col items-center justify-between p-8">
          <div className="container flex flex-col md:flex-row m-auto justify-between">
            <div className="relative text-white p-6 bg-opacity-70 bg-black rounded-lg mb-8 md:mb-0 md:max-w-lg md:mr-8 md:flex-1">
              <h1 className="text-3xl font-bold mb-4">CineManía</h1>
              <p className="mb-2">En CineManía, nos apasiona el entretenimiento. Somos tu destino principal para descubrir, ver y disfrutar de una amplia variedad de series y películas de todo el mundo.</p>
              <p className="mb-2">Explora miles de películas y series, desde los clásicos más queridos hasta los estrenos más recientes. Basadas en tus gustos y preferencias, siempre encontrarás algo que te encante.</p>
              <p className="mb-2">Disfruta de contenido en HD y 4K, con un streaming fluido y sin interrupciones, en tu televisión, computadora, tablet o smartphone, donde y cuando quieras. ¡Sin anuncios!</p>
              <p className="mb-2">Únete a la Comunidad CineManía. Regístrate hoy y accede a un mundo de entretenimiento ilimitado. Bienvenido a la nueva era del entretenimiento.</p>
            </div>
            <div className="relative bg-opacity-70 bg-black rounded-lg p-8 md:w-80 md:mt-0">
              <Form />
            </div>
          </div>
        </div>
      </div>


      <MovieBannerContainer />
      <MovieCardContainer />
      <SerieBannerContainer/>
    </>
  )
}

export default Home