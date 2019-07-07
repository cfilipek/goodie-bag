import React from 'react'
import AllCandies from './AllCandies'
import Home from './Home'
import SingleCandy from './SingleCandy'
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
        <Route exact path='/candies' component={AllCandies} />
        <Route path='/candies/edit/:id' component={SingleCandy}/>
      </main>
    </div>
  )
}

export default Root
