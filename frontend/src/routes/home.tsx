import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { SignIn, SignUp } from '../pages'



export default () => (
    <Switch>
        <Route exact path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
        <Redirect from="*" to="/signin"/>
    </Switch>
)