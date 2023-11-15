import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/DadJoke/DadJokesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_DAD_JOKE_MUTATION = gql`
  mutation DeleteDadJokeMutation($id: String!) {
    deleteDadJoke(id: $id) {
      id
    }
  }
`

const DadJokesList = ({ dadJokes }) => {
  const [deleteDadJoke] = useMutation(DELETE_DAD_JOKE_MUTATION, {
    onCompleted: () => {
      toast.success('DadJoke deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dadJoke ' + id + '?')) {
      deleteDadJoke({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Joke string</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dadJokes.map((dadJoke) => (
            <tr key={dadJoke.id}>
              <td>{truncate(dadJoke.id)}</td>
              <td>{truncate(dadJoke.jokeString)}</td>
              <td>{timeTag(dadJoke.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.dadJoke({ id: dadJoke.id })}
                    title={'Show dadJoke ' + dadJoke.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editDadJoke({ id: dadJoke.id })}
                    title={'Edit dadJoke ' + dadJoke.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete dadJoke ' + dadJoke.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(dadJoke.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DadJokesList
