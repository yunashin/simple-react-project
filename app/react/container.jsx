import React, { PropTypes } from 'react'
import Status from './status.jsx'
import List from './list.jsx'

export default class Container extends React.Component {
	constructor(props) {
        super(props);

        this.state = {people: this.props.people}
    }

    static propTypes = {
        people: PropTypes.arrayOf(PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string,
        })).isRequired,
    }

    setActivePerson(i) {
    	let people = this.state.people;
    	people[i].active = !people[i].active
    	this.setState({people: people})
    }

    render () {
        return (
            <div>
                <Status people={this.state.people} />
                <List people={this.state.people} setActivePerson={(i) => this.setActivePerson(i)} />
            </div>
        )
    }
}