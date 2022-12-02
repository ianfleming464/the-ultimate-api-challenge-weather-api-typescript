import { ChangeEvent, useState } from 'react'
// CALL EXAMPLE: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
const App = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <h1 className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </h1>
        <p className="text-sm mt-2">Select your destination</p>
        <div className="flex mt-10 md:mt-4">
          <input
            type="text"
            value={searchTerm}
            className="px-2 py-1 rounded-l-md border-2 border-white"
            onChange={onInputChange}
          />
          <button className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer">
            Search me
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
