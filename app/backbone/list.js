import ListItem from './list_item'

export default Backbone.View.extend({
    initialize ({ state }) {
        this.state = state
    },

    render () {
        this.state.people.each(person => {
            const item = new ListItem({ person, state: this.state })
            this.$el.append(item.render().$el)
        }, this)

        return this
    }
})
