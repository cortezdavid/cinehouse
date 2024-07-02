import { useState, useEffect } from "react";
import options from '../../config/apiOptions';


const Videos = ({ id, category }) => {
  const [videoTrailer, setVideoTrailer] = useState(null)

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${category}/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        const trailer = response.results.find(video => video.type === "Trailer")
        setVideoTrailer(trailer || null)
      })
      .catch(err => console.error(err));
  }, [id, category])

  return (
    <div className="container m-auto">
      {videoTrailer ? (
        <iframe
          className=" w-full h-64"
          src={`https://www.youtube.com/embed/${videoTrailer.key}`}
          title="YouTube Video"
          allowFullScreen
        />
      ) : (
        <p className="text-center text-gray-500">No hay trailer disponible para esta película.</p>
      )}
    </div>
  )
}

export default Videos
