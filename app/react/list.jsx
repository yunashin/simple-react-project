import React, { PropTypes } from 'react'
import ListItem from './list_item.jsx'

export default class List extends React.Component {
	static propTypes = {
        people: PropTypes.arrayOf(PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string,
        })).isRequired,
    }

	render () {
		return (
			<div>
				{ 
					this.props.people.map((person, i) => 
						<ListItem setActivePerson={() => this.props.setActivePerson(i)} key={person.first_name} person={person}/>
					)
				}
			</div>
		)
	}	
}