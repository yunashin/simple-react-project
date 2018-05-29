import map from 'lodash/map'

export default Backbone.View.extend({
    initialize ({ state }) {
        this.state = state

        this.listenTo(this.state.people, 'change:active', this.render)
    },

    render () {
        const people  = this.state.people.filter(person => person.get('active'))
        const names = map(people, person => {
            return `${person.get('first_name')} ${person.get('last_name')}`
        }).join(', ')

        this.$el.html(`Selected people: ${names.length ? names : 'None'}`)

        return this
    }
})
