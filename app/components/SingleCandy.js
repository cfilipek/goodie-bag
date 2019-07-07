import React, {Component} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'

class SingleCandy extends Component {
  state = {
    candy: null,
    quantityToChange: 0,
    delete: false
  }

  async componentDidMount(){
    const id = this.props.match.params.id
    const res = await axios.get(`/api/candies/${id}`)
    this.setState({candy: res.data,
    quantityToChange: res.data.quantity})
  }

  async componentWillUpdate(){
    const id = this.props.match.params.id
    const match = {quantity: this.state.quantityToChange}
    await axios.put(`/api/candies/${id}`, match)

    if (this.state.delete === true) {
      const id = this.props.match.params.id
      await axios.delete(`/api/candies/${id}`)
    }
  }


  decrement () {
    this.setState({quantityToChange: this.state.quantityToChange-=1 })
  }
  increment () {
    this.setState({quantityToChange: this.state.quantityToChange+=1 })
  }

  deleteCandy () {
    this.setState({
      delete: true
    })
  }


  render(){
    // console.log('state', this.state)
    const candy = this.state.candy && this.state.delete === false ? (
      <div>
        <h4>{this.state.candy.name}</h4>
        <p>Quantity: {this.state.quantityToChange}</p>
        <Button onClick={()=> this.increment()}>Increase</Button>
        <Button onClick={()=> this.decrement()}>Decrease</Button>
        <img src={`${this.state.candy.imageUrl}`}/>
        <br/>
        <Button onClick={()=> this.deleteCandy()}>Delete Candy</Button>
      </div>
    ) : (
      <div>No candy here!</div>
    )

    return(
      <div>
        {candy}
      </div>
    )
  }
}

export default SingleCandy
