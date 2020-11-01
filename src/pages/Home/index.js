import React from 'react'
import Menu from 'components/Menu'
import classes from './index.scss'

const Home = () => {
  return (
    <div className={classes.container}>
      <Menu />

      Notre page d'accueil
    </div>
  )
}

export default Home
