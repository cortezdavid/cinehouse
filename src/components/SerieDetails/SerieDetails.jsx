import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import options from '../../config/apiOptions';
import Loading from "../Loading/Loading";
import Videos from "../Videos/Videos";


const SerieDetails = () => {
  const [serie, setSerie] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/${id}?language=es-MX`, options)
      .then(response => response.json())
      .then(response => setSerie(response))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading
        ? (
          <Loading />)
        : (
          <>
            <div
              className="relative bg-center bg-cover bg-no-repeat h-full" style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${serie.backdrop_path}")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 md:space-x-4">
                <img
                  className="h-48 md:h-full rounded-lg"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${serie.poster_path}`} alt={serie.title}
                />
                <div className="text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{serie.name}</h2>
                  <p>{serie.tagline}</p>
                  <div className="mt-2">
                    <p><strong>Vista general:</strong> {serie.overview}</p>
                    <p className="mt-2"><strong>Temporadas: </strong>{serie.number_of_seasons}</p>
                    <p className="mt-2">
                      <strong>Género:</strong> {serie.genres.map(genero => genero.name).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Videos id={serie.id} category={'tv'} />
          </>)
      }
    </>
  )
}

export default SerieDetails