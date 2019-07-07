import React from 'react'
import {connect} from 'react-redux'
import {getCandy} from '../store'
import {Link} from 'react-router-dom'


class AllCandies extends React.Component {

componentDidMount(){
  // console.log(this.props.getCandy())
  this.props.getCandy();

}




render() {
  const {candy} = this.props
  if(candy.length < 1){
    return <div>Loading...</div>
  } else {
    console.log('candy', candy)
    return (
      <div>
        <div className="candies_center">
          <h2 className="candies_title">Candies</h2>
          {candy.map(singleCandy => (
            <div className="candies_wrapper" key={singleCandy.id}>
            <Link to={`/candies/edit/${singleCandy.id}`}><h4>{singleCandy.name}</h4></Link>
            <h5>Quantity: {singleCandy.quantity}</h5>
            <img src={`${singleCandy.imageUrl}`} />

            </div>
          ))}
        </div>
      </div>
    )
  }

}
}

const mapState = (state) => {
  return {
    candy: state.candy
  }
}

const mapDispatch = (dispatch) => {
  // YOUR CODE HERE
  return {
    getCandy: () => dispatch(getCandy())

}
}


export default connect(mapState, mapDispatch)(AllCandies)
