import classnames from 'classnames'

export default Backbone.View.extend({
    initialize ({ state, person }) {
        this.state = state
        this.person = person

        this.listenTo(this.person, 'change:active', this.render)
    },

    events: {
        'click .item': 'onItemClick'
    },

    onItemClick () {
        this.person.set('active', !this.person.get('active'))
    },

    render () {
        this.$el.html(`
            <div class="${classnames('item', { active: this.person.get('active') })}">
                ${this.person.get('first_name')} ${this.person.get('last_name')}
            </div>
        `)

        return this
    }
})
