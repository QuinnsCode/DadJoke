import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DAD_JOKE_MUTATION = gql`
  mutation DeleteDadJokeMutation($id: String!) {
    deleteDadJoke(id: $id) {
      id
    }
  }
`

const DadJoke = ({ dadJoke }) => {
  const [deleteDadJoke] = useMutation(DELETE_DAD_JOKE_MUTATION, {
    onCompleted: () => {
      toast.success('DadJoke deleted')
      navigate(routes.dadJokes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dadJoke ' + id + '?')) {
      deleteDadJoke({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            DadJoke {dadJoke.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{dadJoke.id}</td>
            </tr>
            <tr>
              <th>Joke string</th>
              <td>{dadJoke.jokeString}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(dadJoke.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDadJoke({ id: dadJoke.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(dadJoke.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default DadJoke
