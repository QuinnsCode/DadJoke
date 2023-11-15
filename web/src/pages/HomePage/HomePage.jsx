import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <div className="h-full">
        <div className="bg-black py-1 px-2 border-2 border-white text-white h-2/3">
          Joke
        </div>
      </div>
    </>
  )
}

export default HomePage
