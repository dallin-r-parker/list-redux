const ADD_CHORE = 'chore/ADD_CHORE';
const REMOVE_CHORE = 'chore/REMOVE_CHORE'

export default function reducer(state, action){
	switch(action.type) {
		//the action.type is going to come from the dispatch object "type"
			//which is defined in the component, when invoking dispatch.
		case ADD_CHORE:
			return {
				chores: [...state.chores, action.payload]
			}
		case REMOVE_CHORE:
			let targetChore = action.payload
			var newChores = [...state.chores]

			newChores.splice(newChores.indexOf(targetChore), 1);

			return {
				chores: newChores
			}

		default:
			return state
	}
}


//ACTION: is sent to the reducer, which then the reducer uses to determine how the
//state should change

//ACTION CREATOR: is responsible for creating a properly formatted action
export function addChore(newChore){
	return {
		type: ADD_CHORE,
		payload: newChore
	}
}
// This is an ACTION CREATOR