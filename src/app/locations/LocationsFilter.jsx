"use client"
import { useState, useEffect } from "react"

function Filter({ }) {
    const [filters, setFilters] = useState({
        type: "Planet",
        dimension: "Dimension C-137"
    })

    const [locations, setLocations] = useState([]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const getApiFilters = async () => {
        const apiUrl = `https://rickandmortyapi.com/api/location/?type=${filters.type}&dimension=${filters.dimension}`

        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            const data = await response.json()
            setLocations(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
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
                                    <span class="text-sm text-gray-700"> 0 Selected </span>

                                    <button
                                        type="button"
                                        class="text-sm text-gray-900 underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <ul class="space-y-1 border-t border-gray-200 p-4">
                                    <li className='pb-4'>
                                        <p>Type</p>
                                        <select id="type" name="type" value={filters.type} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                            <option value="Planet">Planet</option>
                                            <option value="Cluster">Cluster</option>
                                            <option value="Space station">Space Station</option>
                                            <option value="Microverse">Microverse</option>
                                            <option value="TV">TV</option>
                                            <option value="Resort">Resort</option>
                                            <option value="Fantasy Town">Fantasy Town</option>
                                            <option value="Dream">Dream</option>
                                        </select>
                                    </li>

                                    <li className='pb-4'>
                                        <p>Species</p>
                                        <select id="dimension" name="dimension" value={filters.dimension} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                            <option value="unknown">Unknown</option>
                                            <option value="Dimension C-137">Dimension C-137</option>
                                            <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                                            <option value="Replacement Dimension">Replacement Dimension</option>
                                            <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                                            <option value="Fantasy Dimension">Fantasy Dimension</option>
                                            <option value="Dimension 5-126">Dimension 5-126</option>
                                            <option value="Dream">Dream</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </div>
            </div>

            <div class="w-2/5 m-auto mt-7 shadow p-3 pt-1 pb-5 rounded-lg bg-white hidden lg:block">
                <div class="flex items-center justify-between mt-4">
                    <p class="font-medium text-xl">
                        Filters
                    </p>

                    <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Reset Filter
                    </button>
                </div>

                <div>
                    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select name="type" value={filters.type} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="Planet">Planet</option>
                            <option value="Cluster">Cluster</option>
                            <option value="Space station">Space Station</option>
                            <option value="Microverse">Microverse</option>
                            <option value="TV">TV</option>
                            <option value="Resort">Resort</option>
                            <option value="Fantasy Town">Fantasy Town</option>
                            <option value="Dream">Dream</option>
                        </select>

                        <select name="dimension" value={filters.dimension} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="unknown">Unknown</option>
                            <option value="Dimension C-137">Dimension C-137</option>
                            <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                            <option value="Replacement Dimension">Replacement Dimension</option>
                            <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                            <option value="Fantasy Dimension">Fantasy Dimension</option>
                            <option value="Dimension 5-126">Dimension 5-126</option>
                            <option value="Dream">Dream</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter