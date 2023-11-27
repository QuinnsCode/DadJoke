import { db } from 'src/lib/db'

export const dadJokes = () => {
  return db.dadJoke.findMany()
}

export const dadJoke = ({ id }) => {
  return db.dadJoke.findUnique({
    where: { id },
  })
}

export const randomDadJoke = async () => {
  const totalJokes = await db.dadJoke.count()
  console.log('Total Jokes:', totalJokes)

  const randomIndex = Math.floor(Math.random() * totalJokes)
  console.log('Random Index:', randomIndex)

  const randomJoke = await db.dadJoke.findFirst({
    skip: randomIndex,
    orderBy: { id: 'asc' }, // Assuming you have an 'id' field
  })
  console.log('Random Joke:', randomJoke)

  return randomJoke
}

export const createDadJoke = ({ input }) => {
  return db.dadJoke.create({
    data: input,
  })
}

export const updateDadJoke = ({ id, input }) => {
  return db.dadJoke.update({
    data: input,
    where: { id },
  })
}

export const deleteDadJoke = ({ id }) => {
  return db.dadJoke.delete({
    where: { id },
  })
}
