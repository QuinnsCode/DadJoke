import DadJoke from 'src/components/DadJoke/DadJoke'

export const QUERY = gql`
  query FindDadJokeById($id: String!) {
    dadJoke: dadJoke(id: $id) {
      id
      jokeString
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>DadJoke not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dadJoke }) => {
  return <DadJoke dadJoke={dadJoke} />
}
