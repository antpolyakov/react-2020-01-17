import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import CounterPage from '../routes/counter'
import RestaurantsPage from '../routes/restaurants'
import {
  COUNTER_PAGE_PATH,
  RESTAURANT_PAGE_PATH,
  ROOT_PATH,
} from '../routes/common'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div>
            <Layout>
              <Header />
              <Layout.Content>
                <Switch>
                  <Route
                    path={`${COUNTER_PAGE_PATH}/:initialValue?`}
                    component={CounterPage}
                  />
                  <Route
                    path={ROOT_PATH}
                    exact={true}
                    component={RestaurantsPage}
                  />
                  <Route
                    path={`${RESTAURANT_PAGE_PATH}/:currentId`}
                    exact
                    render={() => <RestaurantsPage />}
                  />
                  <Route
                    path={ROOT_PATH}
                    render={() => <h1>Page Not Found</h1>}
                  />
                </Switch>
              </Layout.Content>
            </Layout>
          </div>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default App
