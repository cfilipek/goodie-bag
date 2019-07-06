import React from 'react'
import AllCandies from './AllCandies'
import Home from './Home'
import {Route, Link} from 'react-router-dom'



const Root = () => {
  return (
    <div>
      <nav>
        <Link className="link" to="/">Goodie Bag</Link>
        <Link className="link" to="/candies">Check out your candies!</Link>
      </nav>
      <main>

        <Route exact path='/' component={Home} />
        <Route path='/candies' component={AllCandies} />

      </main>
    </div>
  )
}

export default Root
