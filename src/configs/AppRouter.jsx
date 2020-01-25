import React from 'react'
import { Route as R, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Hello from '../pages/Hello'
import About from '../pages/About'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <R exact path='/'>{Home}</R>
    <R path="/about">{About}</R>
            <R path='/hello'>{Hello}</R>
    <R exact path='/login'>{Login}</R>
    </Switch>
        </div>
    )
}

export default AppRouter
