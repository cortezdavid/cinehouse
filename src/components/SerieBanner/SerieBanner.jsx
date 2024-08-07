import { Link } from "react-router-dom"

const SerieBanner = ({ serieBanner }) => {
  return (
    <Link to={`serie/${serieBanner.id}`}>
      <h2>{serieBanner.name}</h2>
    </Link>
  )
}

export default SerieBanner