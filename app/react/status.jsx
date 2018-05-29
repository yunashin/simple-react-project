import React, { PropTypes } from 'react'

export default class Status extends React.Component {
	static propTypes = {
        people: PropTypes.arrayOf(PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string,
        })).isRequired,
    }

	render () {
		const people = this.props.people.filter(person => person.active)
		const names = people.map(person => `${person.first_name} ${person.last_name}`).join(', ')
		return (
			<div id="select">Selected people: {names.length ? names : 'None'}</div>
		)
	}	
}