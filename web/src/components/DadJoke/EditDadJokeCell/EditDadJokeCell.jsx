import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DadJokeForm from 'src/components/DadJoke/DadJokeForm'

export const QUERY = gql`
  query EditDadJokeById($id: String!) {
    dadJoke: dadJoke(id: $id) {
      id
      jokeString
      createdAt
    }
  }
`
const UPDATE_DAD_JOKE_MUTATION = gql`
  mutation UpdateDadJokeMutation($id: String!, $input: UpdateDadJokeInput!) {
    updateDadJoke(id: $id, input: $input) {
      id
      jokeString
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ dadJoke }) => {
  const [updateDadJoke, { loading, error }] = useMutation(
    UPDATE_DAD_JOKE_MUTATION,
    {
      onCompleted: () => {
        toast.success('DadJoke updated')
        navigate(routes.dadJokes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDadJoke({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit DadJoke {dadJoke?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DadJokeForm
          dadJoke={dadJoke}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
