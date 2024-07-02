import { Link } from "react-router-dom"

const MovieCard = ({ movieCard }) => {
  return (
    <div className=" flex justify-center items-center">
      <Link to={`movie/${movieCard.id}`}>
        <img
          className="w-full transition-transform duration-200 ease-in-out transform hover:scale-105"
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movieCard.poster_path}`}
          alt=""
          title={`${movieCard.title}`}
        />
      </Link>
    </div>
  )
}

export default MovieCard