import Cards from "@/components/Cards";
import Filter from "@/components/Filter";

const obtenerDatos = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const characters = await obtenerDatos()

  return (
    <main >
      <Filter />
      <section className="mt-10 mx-4 mb-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-9 lg:gap-12">
        <Cards characters={characters} />
      </section>
    </main>
  )
}
