import React, {Component} from 'react'
import {Layout} from 'antd'
import Header from '../header'
import './app.css'
import {store} from '../../store'
import {Provider} from 'react-redux'
import {Route, Switch, Redirect} from 'react-router-dom'
import RestaurantPage from '../../routes/restaurant-page'
import CounterPage from '../../routes/counter-page'
import OrderPage from '../../routes/order-page'
import OrderComplete from '../../routes/order-complete'
import {ConnectedRouter} from 'connected-react-router'
import {history} from '../../history'
import {Provider as UserProvider} from '../../contexts/user'
import I18nContext from '../../contexts/i18n'
import getTranslateFunc, {
  DEFAULT_LANG,
  defaultTranslate,
  LOCALES,
} from '../../i18n'

class App extends Component {
  state = {
    i18n: {
      lang: DEFAULT_LANG,
      translate: defaultTranslate,
    },
    user: {name: ''},
  }

  handleLangChange = lang => {
    this.setState({
      i18n: {
        lang,
        translate: getTranslateFunc(lang),
      },
    })
  }

  handleUserChange = user => {
    this.setState({
      user,
    })
  }

  render() {
    const {lang, translate} = this.state.i18n
    return (
      <UserProvider
        value={{
          name: this.state.user.name,
          handleUserChange: this.handleUserChange,
        }}
      >
        <I18nContext.Provider
          value={{
            lang,
            translate,
            locales: LOCALES,
            handleLangChange: this.handleLangChange,
          }}
        >
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <div>
                <Layout>
                  <Header />
                  <Layout.Content>
                    <Switch>
                      <Route
                        path="/counter"
                        exact
                        strict
                        component={CounterPage}
                      />
                      <Route path="/restaurant" component={RestaurantPage} />
                      <Route
                        path="/order"
                        render={() => (
                          <OrderPage handleUserChange={this.handleUserChange} />
                        )}
                      />
                      <Route path="/order-complete" component={OrderComplete} />
                      <Route path="/404" render={() => <h1>404</h1>} />
                      <Redirect from="/" exact to="restaurant" />
                      <Route path="/" render={() => <h1>Page not found</h1>} />
                    </Switch>
                  </Layout.Content>
                </Layout>
              </div>
            </ConnectedRouter>
          </Provider>
        </I18nContext.Provider>
      </UserProvider>
    )
  }
}

export default App
