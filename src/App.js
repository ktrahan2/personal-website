import React from 'react'
import './App.css';
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
       
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
 
  )
}