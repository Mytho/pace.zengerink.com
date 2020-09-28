import React from 'react'
import Calculator from './components/Calculator/Calculator'
import './App.scss'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
        <Calculator />
      </div>
    )
  }
}