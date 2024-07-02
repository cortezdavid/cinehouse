import { Link } from "react-router-dom"

const MovieBanner = ({ movieBanner }) => {
  return (
    <Link to={`movie/${movieBanner.id}`}>
      <h1>{movieBanner.title}</h1>
    </Link>
  )
}

export default MovieBanner