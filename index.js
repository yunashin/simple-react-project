import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import { people } from '../data.json'
import ReactContainer from './react/container.jsx'
import BackboneContainer from './backbone/container'

import './less/global.less'
import './less/backbone.less'
import './less/react.less'

// Render Backbone
const container = new BackboneContainer({
    state: { people: new Backbone.Collection(people) }
})

container.setElement(document.getElementById('backbone'))
container.render()

// Render React
ReactDOM.render(
    <ReactContainer people={people} />,
    document.getElementById('react')
)
