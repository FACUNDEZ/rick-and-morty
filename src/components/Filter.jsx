"use client"
import { useState, useEffect } from "react"

function Filter() {
  const [filters, setFilters] = useState({
    status: 'Alive',
    species: 'Human',
    gender: 'Female'
  })

  const [characters, setCharacters] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  useEffect(() => {

  const getApiFilters = async () => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?status=${filters.status}&species=${filters.species}&gender=${filters.gender}`

    try {
      const response = await fetch(apiUrl)
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      const data = await response.json()
      console.log(data)
      setCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

    getApiFilters()
  }, [filters])

  return (
    <>
      <div class="mt-6 flex gap-8 justify-center lg:hidden">
        <div class="relative">
          <details class="group [&_summary::-webkit-details-marker]:hidden">
            <summary
              class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            >
              <span class="text-sm font-medium"> Filter by Category </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div
              class="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
            >
              <div class="w-60 rounded border border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <button
                    type="button"
                    class="text-sm text-gray-900 underline underline-offset-4"
                    onClick={() => {
                      setFilters({
                        status: 'Alive',
                        species: 'Human',
                        gender: 'Female'
                      })
                    }}
                  >
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li className='pb-4'>
                    <p>Status</p>
                    <select id="status" name="status" value={filters.status} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                      <option class="status" value="Alive">Alive</option>
                      <option class="status" value="Dead">Dead</option>
                      <option class="status" value="Unknown">Unknown</option>
                    </select>
                  </li>

                  <li className='pb-4'>
                    <p>Species</p>
                    <select id="status" name="species" value={filters.species} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                      <option value="Human">Human</option>
                      <option value="Animal">Animal</option>
                      <option value="Humanoid">Humanoid</option>
                      <option value="Alien">Alien</option>
                      <option value="Robot">Robot</option>
                      <option value="Mythological Creature">Mythological Creature</option>
                      <option value="Cronenberg">Cronenberg</option>
                    </select>
                  </li>

                  <li className='pb-4'>
                    <p>Gender</p>
                    <select id="status" name="gender" value={filters.gender} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                      <option value="Female">Female</option>
                      <option value="Male">Male</option>
                      <option value="Genderless">Genderless</option>
                      <option value="Unknown">Unknown</option>
                    </select>
                  </li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>

      <div class="w-2/4 m-auto mt-7 shadow p-3 pt-1 pb-5 rounded-lg bg-white hidden lg:block">
        <div class="flex items-center justify-between mt-4">
          <p class="font-medium text-xl">
            Filters
          </p>

          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" onClick={() => {
            setFilters({
              status: 'Alive',
              species: 'Human',
              gender: 'Female'
            })
          }}>
            Reset Filter
          </button>
        </div>

        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select name="status" value={filters.status} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Unknown">Unknown</option>
            </select>

            <select name="species" value={filters.species} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="Human">Human</option>
              <option value="Animal">Animal</option>
              <option value="Humanoid">Humanoid</option>
              <option value="Alien">Alien</option>
              <option value="Robot">Robot</option>
              <option value="Mythological Creature">Mythological Creature</option>
              <option value="Cronenberg">Cronenberg</option>
            </select>

            <select name="gender" value={filters.gender} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Genderless">Genderless</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Filter