import { Link, routes } from '@redwoodjs/router'

import DadJokes from 'src/components/DadJoke/DadJokes'

export const QUERY = gql`
  query FindDadJokes {
    dadJokes {
      id
      jokeString
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No dadJokes yet. '}
      <Link to={routes.newDadJoke()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dadJokes }) => {
  return <DadJokes dadJokes={dadJokes} />
}
