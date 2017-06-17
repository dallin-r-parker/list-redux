import React from 'react'

export default function List(props) {
	let chores = props.chores.map((chores, i) => <li key={i}>{chores}</li>)

	return (
		<div className="list-wrapper">
			<h1>{props.title}</h1>
				{chores}
		</div>
	)
}