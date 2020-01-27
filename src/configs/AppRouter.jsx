import React from 'react'
import { Route as R, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Hello from '../pages/Hello'
import About from '../pages/About'
import Admin from '../pages/Admin'
import PrivateRoute from './PrivateRoute'
import Dev from '../pages/Dev'
import Customer from '../pages/Customer'
const AppRouter = () => {
    return (
        <div>
            <Switch>
            <R exact path='/'>{Home}</R>
            <R path="/about">{About}</R>
            <R path='/hello'>{Hello}</R>
            <R exact path='/login'>{Login}</R>
            <PrivateRoute path='/admin' component={Admin}/>
            <R path ='/devs'>{Dev}</R>
            <R path = '/customers'>{Customer}</R>
    </Switch>
        </div>
    )
}

export default AppRouter
