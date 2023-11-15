import { db } from 'src/lib/db'

export const dadJokes = () => {
  return db.dadJoke.findMany()
}

export const dadJoke = ({ id }) => {
  return db.dadJoke.findUnique({
    where: { id },
  })
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
