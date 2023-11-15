import {
  dadJokes,
  dadJoke,
  createDadJoke,
  updateDadJoke,
  deleteDadJoke,
} from './dadJokes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('dadJokes', () => {
  scenario('returns all dadJokes', async (scenario) => {
    const result = await dadJokes()

    expect(result.length).toEqual(Object.keys(scenario.dadJoke).length)
  })

  scenario('returns a single dadJoke', async (scenario) => {
    const result = await dadJoke({ id: scenario.dadJoke.one.id })

    expect(result).toEqual(scenario.dadJoke.one)
  })

  scenario('creates a dadJoke', async () => {
    const result = await createDadJoke({
      input: { jokeString: 'String' },
    })

    expect(result.jokeString).toEqual('String')
  })

  scenario('updates a dadJoke', async (scenario) => {
    const original = await dadJoke({ id: scenario.dadJoke.one.id })
    const result = await updateDadJoke({
      id: original.id,
      input: { jokeString: 'String2' },
    })

    expect(result.jokeString).toEqual('String2')
  })

  scenario('deletes a dadJoke', async (scenario) => {
    const original = await deleteDadJoke({
      id: scenario.dadJoke.one.id,
    })
    const result = await dadJoke({ id: original.id })

    expect(result).toEqual(null)
  })
})
