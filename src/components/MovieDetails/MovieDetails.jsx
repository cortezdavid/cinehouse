import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import options from '../../config/apiOptions';
import Loading from "../Loading/Loading";
import Videos from "../Videos/Videos";


const MovieDetails = () => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-MX`, options)
      .then(response => response.json())
      .then(response => setMovie(response))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [id]);

  const runtimeHours = Math.floor(movie.runtime / 60)
  const runtimeMinutes = movie.runtime % 60
  const year = new Date(movie.release_date).getFullYear();

  return (
    <>
      {loading
        ? (
          <Loading />)
        : (
          <>
            <div
              className="relative bg-center bg-cover bg-no-repeat h-full" style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/w1280${movie.backdrop_path}")`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative mx-auto max-w-6xl flex flex-col md:flex-row items-start p-4 space-y-4 md:space-y-0 md:space-x-4">
                <img
                  className="h-48 md:h-full rounded-lg"
                  src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`} alt={movie.title}
                />
                <div className="text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-4">{movie.title}</h2>
                  <div className="mt-2">
                    <p><strong>Vista general:</strong> {movie.overview}</p>
                    <p className="mt-2"><strong>Duración: </strong>{`${runtimeHours}h ${runtimeMinutes}min`} <strong>Año:</strong> {year}</p>
                    <p className="mt-2">
                      <strong>Género:</strong> {movie.genres.map(genero => genero.name).join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Videos id={movie.id} category={'movie'} />
          </>)
      }
    </>
  )
}

export default MovieDetails