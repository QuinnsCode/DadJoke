// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ScaffoldLayout} title="DadJokes" titleTo="dadJokes" buttonLabel="New DadJoke" buttonTo="newDadJoke">
        <Route path="/dad-jokes/new" page={DadJokeNewDadJokePage} name="newDadJoke" />
        <Route path="/dad-jokes/{id}/edit" page={DadJokeEditDadJokePage} name="editDadJoke" />
        <Route path="/dad-jokes/{id}" page={DadJokeDadJokePage} name="dadJoke" />
        <Route path="/dad-jokes" page={DadJokeDadJokesPage} name="dadJokes" />
      </Set>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
