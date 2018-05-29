import React, { PropTypes } from 'react'

export default class List extends React.Component {
	static propTypes = {
        person: PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string,
        }).isRequired,
    }

	render () {
		const person = this.props.person;
		return (
			<div className={person.active ? 'active' : 'inactive'} onClick={ () => this.props.setActivePerson()}>
				 {person.first_name} {person.last_name}
			</div>
		)
	}	
} 	