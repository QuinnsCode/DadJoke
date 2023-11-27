export const QUERY = gql`
  query FindRandomJokeQuery {
    randomDadJoke {
      id
      jokeString
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ randomDadJoke }) => {
  return <div>{randomDadJoke.jokeString}</div>
}
