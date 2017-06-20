import React, {Component} from 'react'
import {connect} from 'react-redux'
import { addChore } from '../../redux/chores'

class AddToList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			newItem: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		//Need to understand this more!
	}

	handleChange(e) {
		this.setState({
			newItem: e.target.value
		})
	}
//Dispatch is a keyword in Redux for taking an action (object) and sending it to the
//reducer and letting the reducer handle what changed on state.
	handleClick() {
		console.log(this.props)
		// dispatch sends a obj with "type" & "payload" properties
		//this.props.dispatch({
		//this string given to "type" has to match exactly the same string defined in the reducer.
			//type: 'chore/ADD_CHORE',
			//payload: this.state.newItem
			// the payload comes from the changes being made on the component state.
		//})
		// with the new import of addChore I can simply do it this way.
		this.props.dispatch(addChore(this.state.newItem));

	}

	render(){
		return(
			<div>
				<input onChange={this.handleChange}/>
				<button onClick={this.handleClick}>Add Chore</button>
			</div>
		)
	}

}
export default connect()(AddToList)
// Connect doesn't just connect components to the store, it also
// makes the "dispatch" function available, which connects directly with a reducer.