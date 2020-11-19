import React from 'react'
import Home from './routes/Home'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </main>
  )
}