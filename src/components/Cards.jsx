export default function Cards({characters}) {
  
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
    <>
      {characters?.map((character) => (
        <div className="max-w-xs h-auto relative border-solid border-sky-600 border-2 rounded-xl lg:rounded-none hover:scale-y-105 duration-700" key={character.id}>
          <img src={character.image} alt="" className="rounded-t-xl lg:rounded-none min-w-full" />
          <span className={`p-2 rounded text-white font-bold right-0 top-0 absolute m-3 ${setColor(character.status)}`}>{character.status}</span>
          <div className="pb-4 pl-3">
            <h1 className="text-xl font-black mb-5 mt-4">{character.name}</h1>
            <p className="text-sm">Last Location</p>
            <p className="text-xl">{character.location.name}</p>
          </div>
        </div>
      ))}
    </>
  )
}
