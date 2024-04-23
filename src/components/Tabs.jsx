"use client"
import { useState } from 'react'
import Link from 'next/link';

function Tabs() {
  const [buttonMenu, setButtonMenu] = useState(false)

  const toggleMenu = () => {
    setButtonMenu(!buttonMenu);
    setButtonSearch(false);
  };

  const [buttonSearch, setButtonSearch] = useState(false)

  const toggleSearch = () => {
    setButtonSearch(!buttonSearch)
  }

  return (
    <>
      <button onClick={toggleMenu} data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="md:hidden inline-flex items-center p-2 mt-2 ml-3 text-sm dark:text-gray-500 rounded-lg sm:block hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-white dark:hover:bg-sky-600 dark:focus:ring-gray-600 hover:duration-700">
        <span className="sr-only">Open sidebar</span>
        <svg width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6l16 0" />
          <path d="M4 12l16 0" />
          <path d="M4 18l16 0" />
        </svg>
      </button>

      {buttonMenu === true && (
        <aside id="cta-button-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${buttonMenu === true ? "block" : "hidden"}`} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-sky-600">
            <button onClick={toggleMenu}>
              <svg width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
            <ul className="space-y-2 font-medium md:block">
              <li>
                <button onClick={toggleSearch} className={`flex items-center p-2 mt-5 w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group ${buttonSearch === true ? "hidden" : "block"}`}>
                  <svg width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                  </svg>
                  <span className="ml-3">Search</span>
                </button>
                {buttonSearch === true && (
                  <div class={`relative mt-5 ${buttonSearch === true ? "block" : "hidden"}`}>
                    <label for="Search" class="sr-only"> Search </label>

                    <input
                      type="text"
                      id="Search"
                      placeholder="Search for..."
                      class="w-full rounded-md border-gray-200 p-3 pe-10 shadow-sm sm:text-sm"
                    />

                    <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button type="button" class="text-gray-600 hover:text-gray-700">
                        <span class="sr-only">Search</span>

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
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                          />
                        </svg>
                      </button>
                    </span>
                  </div>
                )}
              </li>

              <li>
                <Link href="/" className="mt-5 text-xl flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group">
                  <span className="flex-1 ml-3 whitespace-nowrap font-black">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/episodes" className="text-xl flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group">
                  <span className="flex-1 ml-3 whitespace-nowrap font-black">Episodes</span>
                </Link>
              </li>
              <li>
                <a href="/locations" className="text-xl flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-300 group">
                  <span className="flex-1 ml-3 whitespace-nowrap font-black">Locations</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}

      <ul className="font-medium md:flex hidden ml-2">
        <li>
          <Link href="/" className="hover:underline decoration-blue-500">
            <span className="ml-4 text-lg font-black text-blue-500">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/episodes" className="hover:underline decoration-blue-500">
            <span className="ml-4 text-lg font-black text-blue-500">Episodes</span>
          </Link>
        </li>
        <li>
          <a href="/locations" className="hover:underline decoration-blue-500">
            <span className="ml-4 text-lg font-black text-blue-500">Locations</span>
          </a>
        </li>
      </ul>

      <div class="relative md:w-1/3 lg:w-2/4 md:block hidden">
        <label for="Search" class="sr-only"> Search </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          class="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm pl-2"
        />

        <span class="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" class="text-gray-600 hover:text-gray-700">
            <span class="sr-only">Search</span>

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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </>
  )
}

export default Tabs