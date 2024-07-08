import React from 'react'

const Form = () => {
  return (
    <form className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="password">Contraseña</label>
        <input className="w-full p-2 border border-gray-300 rounded" type="password" id="password" name="password" required />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200" type="submit">Iniciar Sesión</button>
    </form>
  )
}

export default Form