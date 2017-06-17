import { createStore } from 'redux'
import reducer from './chores';

const initialState = {
	chores: ['Laundry', 'Clean Bathroom', 'Create Redux Store'],
}

export default createStore(reducer, initialState)