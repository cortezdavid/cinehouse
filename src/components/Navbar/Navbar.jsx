import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FiMenu, FiSearch } from "react-icons/fi";

const Navbar = () => {

  const [search, setSearch] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const history = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const inputChange = (e) => {
    setSearch(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    history(`/search/${search}`)
    setSearch('')
  }

  return (
    <nav className=" bg-gray-800 py-6 relative z-10">
      <div className="container mx-auto flex items-center px-8 xl:px-0 ">
        <div className="flex flex-grow">
          <Link to={'/'}>inicio</Link>
        </div>
        <div className="flex lg:hidden">
          <FiMenu onClick={toggleMenu} />
        </div>
        <div className={`lg:flex flex-grow justify-between absolute lg:relative lg:top-0 top-20 left-0 w-full lg:w-auto -my-2 bg-gray-800 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex items-center mb-2 lg:mb-0 px-8">
            <form onSubmit={submit} className=" w-full">
              <input type="text" value={search} placeholder="¿Qué desea buscar?"
                onChange={inputChange}
                className=" w-full lg:w-60 py-2 px-3 rounded-l-lg bg-white focus-visible:outline-none text-xs" />
            </form>
            <button className="flex">
              <FiSearch className="rounded-r-lg bg-white h-8 w-8 px-2 color" />
            </button>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <Link to={'/'} className=" text-white lg:mr-7 mb-2 lg:mb-0">Inicio</Link>
            <a href="" className=" text-white lg:mr-7 mb-2 lg:mb-0">Peliculas</a>
            <a href="" className=" text-white mb-2 lg:mb-0">Series</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


// fuction openMenu(){
//   let menu = document.getElementById('menu')
//   if (menu.classList.contains('hidden')) {
//     menu.classList.remove('hidden')
//   } else {
//     menu.classList.add('hidden')
//   }
// }