import React from 'react'
import { Route as R } from 'react-router-dom'
import Home from '../pages/Home'
const AppRouter = () => {
    return (
        <div>
            <R exact path='/'>{Home}</R>
        </div>
    )
}

export default AppRouter
