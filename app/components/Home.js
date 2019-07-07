import React from 'react'
import {connect} from 'react-redux';
import {addMoreCandy} from '../store'
import {Form, FormControl, Button} from 'react-bootstrap'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      quantity: 0,
      imageUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(changeEvent) {
    const inputValue = changeEvent.target.value;
    const stateField = changeEvent.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    this.props.addMoreCandy({
      candy: this.state

    // dispatch to our thunk creator to create the new post
      });
    this.setState({
      name: '',
      description: '',
      quantity: 0,
      imageUrl: ''
    });
  }


  render(){
    return (
      <div>
        <h1>Welcome to the Goodie Bag!</h1>
          <p>What did you get for halloween?</p>
          <p>Time to keep inventory!</p>
        <div>
          {/* <form onSubmit={this.handleSubmit}>
            <input
              placeholder='candy name'
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              type="text"
            />
            <br />
            <input
              placeholder='description'
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              type="text"
            />
            <br />
            <input
              placeholder='quantity'
              value={this.state.quantity}
              onChange={this.handleChange}
              name="quantity"
              type="number"
            />
            <br />
            <input
              placeholder='image URL'
              value={this.state.imageUrl}
              onChange={this.handleChange}
              name="imageUrl"
              type="text"
            />
            <button type="submit">Add Candy</button>
         </form> */}
         <Form inline className='center' onSubmit={this.handleSubmit} >
            <FormControl placeholder='candy name' value={this.state.name} name="name"
              type="text"
            onChange={this.handleChange}/>
            <FormControl placeholder='description' value={this.state.description} name="description" type="text"
            onChange={this.handleChange}/>
             <FormControl placeholder='quantity' value={this.state.quantity} name="quantity" type="number"
            onChange={this.handleChange}/>
             <FormControl placeholder='image URL' value={this.state.imageUrl} name="imageUrl" type="text"
            onChange={this.handleChange}/>
            <Button type='submit'>Add Candy</Button>
        </Form>
        </div>
      </div>
    )
  }
}


const mapDispatch = (dispatch) => {
  // YOUR CODE HERE
  return {
    addMoreCandy: newCandy => {
      dispatch(addMoreCandy(newCandy))
    }
  }
}



export default connect(null, mapDispatch)(Home);


