import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { TasksList, CreateTask } from '../pages'



export default () => (
    <Switch>
        <Route exact path="/list" component={TasksList}/>
        <Route path="/create" component={CreateTask}/>
        <Redirect from="*" to="/list"/>
    </Switch>
)