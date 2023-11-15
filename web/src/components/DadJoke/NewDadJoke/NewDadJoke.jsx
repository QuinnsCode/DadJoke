import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DadJokeForm from 'src/components/DadJoke/DadJokeForm'

const CREATE_DAD_JOKE_MUTATION = gql`
  mutation CreateDadJokeMutation($input: CreateDadJokeInput!) {
    createDadJoke(input: $input) {
      id
    }
  }
`

const NewDadJoke = () => {
  const [createDadJoke, { loading, error }] = useMutation(
    CREATE_DAD_JOKE_MUTATION,
    {
      onCompleted: () => {
        toast.success('DadJoke created')
        navigate(routes.dadJokes())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDadJoke({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New DadJoke</h2>
      </header>
      <div className="rw-segment-main">
        <DadJokeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDadJoke
