import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const DefaultLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <h1 className="bg-black uppercase text-white py-4 px-2">
          <div className="w-full flex-row-reverse border border-red-500">
            <div className="flex border-2 border-green-600">
              <Link
                className="text-white flex border-2 px-2 border-black rounded-2xl hover:border-2 hover:border-white"
                to={routes.home()}
              >
                D A D J O K E S
              </Link>
              {isAuthenticated ? (
                <div className="normal-case flex-row-reverse">
                  <span>
                    Logged in as{' '}
                    {currentUser?.email ? currentUser.email : 'Nobody'}
                  </span>{' '}
                  <button
                    className="rw-button bg-black hover:bg-gray-700 text-white hover:text-white border border-white hover:border hover:border-white"
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
          <div className="px-8 inline-flex">
            <nav>
              <ul>
                <li>
                  <Link to={routes.home()} className="hover:underline py-1">
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
