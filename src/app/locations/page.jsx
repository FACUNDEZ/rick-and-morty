import LocationsFilter from "@/app/locations/LocationsFilter"

const obtenerDatos = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/location")
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export default async function Page() {
  const locations = await obtenerDatos()

  console.log(locations)

  const setColor = (status) => {
    if (status === 'Alive') {
      return "bg-green-600"
    } else if (status === 'Dead') {
      return "bg-red-600"
    } else {
      return "bg-yellow-400"
    }
  }

  return (
    <main>
      <LocationsFilter />
      <section className='mt-10 mx-4 mb-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-9 lg:gap-12'>
        {locations.map((location) => (
          <div className="max-w-xs h-auto relative border-solid border-sky-600 border-2 rounded-xl lg:rounded-none hover:scale-y-105 duration-700" key={location.id}>
            <span src={location.url} className="rounded-t-xl lg:rounded-none min-w-full">no tienen video</span>
            <span className={`p-2 rounded text-white font-bold right-0 top-0 absolute m-3 ${setColor()}`}>{ }</span>
            <div className="pb-4 pl-3">
              <h1 className="text-xl font-black mb-5 mt-4">{location.name}</h1>
              <p className="text-sm">{location.type}</p>
              <p className="text-xl">{location.dimension}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}