import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './index.css'

import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost'

import Home from './components/routes/home'
import Airlines from './components/routes/airlines'

import Menu from './components/partial/menu'
import Error404 from './components/partial/error-404'

const App = () => {
  const airlineData = new ApolloClient({uri: 'http://localhost:4000/graphql'})

  return (
    <div className="app-container pad-one">
      <BrowserRouter>
        <Menu />
        <ApolloProvider client={airlineData}>
          <Switch>
            <Route exact path={["/home", "/"]}
              render={(props) => <Home {...props} />}
            />
            <Route exact path={["/airlines/:id", "/airlines/"]}
              render={(props) => <Airlines {...props} />}
            />
            <Route component={Error404} />
          </Switch>
        </ApolloProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
