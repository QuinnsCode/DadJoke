import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const user = currentUser

  const username = user?.email

  return (
    <>
      <header>
        <h1 className="bg-black px-2 py-4 uppercase text-white">
          <div className="w-full flex-row-reverse border border-red-500">
            <div className="flex border-2 border-green-600">
              <Link
                className="flex rounded-2xl border-2 border-black px-2 text-white hover:border-2 hover:border-white"
                to={routes.home()}
              >
                D A D J O K E S
              </Link>
              {isAuthenticated ? (
                <div className="flex-row-reverse normal-case">
                  <span>Logged in as {username ? username : 'Nobody'}</span>{' '}
                  <button
                    className="rw-button border border-white bg-black text-white hover:border hover:border-white hover:bg-gray-700 hover:text-white"
                    type="button"
                    onClick={logOut}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link to={routes.login()}>Login</Link>
              )}
            </div>
          </div>
          <div className="inline-flex px-8">
            <nav>
              <ul>
                <li>
                  <Link to={routes.home()} className="py-1 hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={routes.dadJokes()} className="hover:underline">
                    Dad Jokes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </h1>
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
