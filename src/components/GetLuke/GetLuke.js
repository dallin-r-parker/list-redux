import React, {Component} from 'react'
import { getLukeSky } from '../getRequest/getRequests';

class GetLuke extends Component{
	constructor(props){
		super(props)

		this.state = {
			luke: {}

		}
	}

	componentDidMount(){
		getLukeSky().then(luke => {
			this.setState({
				luke: luke
			})
		})
	}

	render(){
		return(
			<div>
				<h1>{this.state.luke.name}</h1>
			</div>
		)
	}
}

export default GetLuke;