import Status from './status'
import List from './list'

export default Backbone.View.extend({
    initialize ({ state }) {
        this.state = state
    },

    render () {
        this.$el.html(`
            <div>
                <div class='status' />
                <div class='list' />
            </div>
        `)

        const status = new Status({ state: this.state })
        const list = new List({ state: this.state })

        status.setElement(this.$('.status')).render()
        list.setElement(this.$('.list')).render()

        return this
    },
})
