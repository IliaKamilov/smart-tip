import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'

const AppRouter: React.FC = ({ children }) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter