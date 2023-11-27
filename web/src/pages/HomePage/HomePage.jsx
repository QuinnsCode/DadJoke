import { MetaTags } from '@redwoodjs/web'

import RandomJokeCell from 'src/components/RandomJokeCell/RandomJokeCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="h-full">
        <div className="h-2/3 border-2 border-white bg-black px-2 py-1 text-white">
          <RandomJokeCell />
        </div>
      </div>
    </>
  )
}

export default HomePage
