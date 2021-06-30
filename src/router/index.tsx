import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import AboutView from './views/AboutView'
import ContactView from './views/ContactView'
import NotFoundView from './views/NotFoundView'

const AppRouter: React.FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/about">
                    <AboutView />
                </Route>
                <Route exact path="/contact">
                    <ContactView />
                </Route>
                <Route status={404}>
                    <NotFoundView />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter