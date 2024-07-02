import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import defaultImage from '../../assets/error.jpg'
import options from '../../config/apiOptions'

const SearchResults = () => {
  const [category, setCategory] = useState('movie')
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const { search } = useParams()


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/${category}?query=${search}&language=es-MX&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response.results);
        setTotalPages(response.total_pages);
      })
      .catch(err => console.error(err))
  }, [category, search, page]);


  return (
    <>
      <div className="flex flex-wrap gap-4 p-4 container m-auto">
        {searchResults.map(selectedMovie => (
          <Link
            key={selectedMovie.id}
            to={`../movie/${selectedMovie.id}`}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 hover:shadow-xl w-40"
          >
            <div className="flex flex-col items-center">
              <img
                src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w220_and_h330_face${selectedMovie.poster_path}` : defaultImage}
                alt={selectedMovie.title}
                className="w-full object-cover"
              />
              <p className="p-2 text-center font-semibold text-gray-700">{selectedMovie.title}</p>
            </div>
          </Link>
        ))}
      </div>


      <div className="mb-14">
        <button onClick={() => { page > 1 && setPage(page - 1) }}>atras</button>
        <button onClick={() => { page < totalPages && setPage(page + 1) }}>siguiente</button>
      </div>
    </>
  )
}

export default SearchResults