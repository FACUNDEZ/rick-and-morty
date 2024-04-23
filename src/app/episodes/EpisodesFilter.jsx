"use client"
import { useState, useEffect } from "react"

function Filter({ }) {

    const [filters, setFilters] = useState({
        episode: 'S01E01'
    })

    const [episodes, setEpisodes] = useState([]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });
    };

    const getApiFilters = async () => {
        const apiUrl = `https://rickandmortyapi.com/api/episode/?episode=${filters.episode}`

        try {
            const response = await fetch(apiUrl)
            if (!response.ok) {
                throw new Error('Error al cargar los datos');
            }
            const data = await response.json()
            setEpisodes(data)
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
                                        <p>Episode</p>
                                        <select id="episode" name="episode" value={filters.episode} onChange={handleFilterChange} class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                            <option value="S01E01">Episode 1 - Season 1</option>
                                            <option value="S01E02">Episode 2 - Season 1</option>
                                            <option value="S01E03">Episode 3 - Season 1</option>
                                            <option value="S01E04">Episode 4 - Season 1</option>
                                            <option value="S01E05">Episode 5 - Season 1</option>
                                            <option value="S01E06">Episode 6 - Season 1</option>
                                            <option value="S01E07">Episode 7 - Season 1</option>
                                            <option value="S01E08">Episode 8 - Season 1</option>
                                            <option value="S01E09">Episode 9 - Season 1</option>
                                            <option value="S01E10">Episode 10 - Season 1</option>
                                            <option value="S01E11">Episode 11 - Season 1</option>
                                            <option value="S02E01">Episode 1 - Season 2</option>
                                            <option value="S02E02">Episode 2 - Season 2</option>
                                            <option value="S02E03">Episode 3 - Season 2</option>
                                            <option value="S02E04">Episode 4 - Season 2</option>
                                            <option value="S02E05">Episode 5 - Season 2</option>
                                            <option value="S02E06">Episode 6 - Season 2</option>
                                            <option value="S02E07">Episode 7 - Season 2</option>
                                            <option value="S02E08">Episode 8 - Season 2</option>
                                            <option value="S02E09">Episode 9 - Season 2</option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </div>
            </div>

            <div class="w-1/4 m-auto mt-7 shadow p-5 pt-1 pb-5 rounded-lg bg-white hidden lg:block">
                <div class="flex items-center justify-between mt-4">
                    <p class="font-medium text-xl">
                        Filters
                    </p>

                    <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
                        Reset Filter
                    </button>
                </div>

                <div>
                    <div class="block m-auto md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select name="episode" value={filters.episode} onChange={handleFilterChange} class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                            <option value="S01E01">Episode 1 - Season 1</option>
                            <option value="S01E02">Episode 2 - Season 1</option>
                            <option value="S01E03">Episode 3 - Season 1</option>
                            <option value="S01E04">Episode 4 - Season 1</option>
                            <option value="S01E05">Episode 5 - Season 1</option>
                            <option value="S01E06">Episode 6 - Season 1</option>
                            <option value="S01E07">Episode 7 - Season 1</option>
                            <option value="S01E08">Episode 8 - Season 1</option>
                            <option value="S01E09">Episode 9 - Season 1</option>
                            <option value="S01E10">Episode 10 - Season 1</option>
                            <option value="S01E11">Episode 11 - Season 1</option>
                            <option value="S02E01">Episode 1 - Season 2</option>
                            <option value="S02E02">Episode 2 - Season 2</option>
                            <option value="S02E03">Episode 3 - Season 2</option>
                            <option value="S02E04">Episode 4 - Season 2</option>
                            <option value="S02E05">Episode 5 - Season 2</option>
                            <option value="S02E06">Episode 6 - Season 2</option>
                            <option value="S02E07">Episode 7 - Season 2</option>
                            <option value="S02E08">Episode 8 - Season 2</option>
                            <option value="S02E09">Episode 9 - Season 2</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter