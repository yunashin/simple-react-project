## Getting Started:

- Install Yarn (https://yarnpkg.com/en/docs/install)
- Open a terminal and `cd` into the assignment directory
- Run `yarn` to install all of the dependencies
- Run `yarn start` to start the development server
- Launch your browser and navigate to the given localhost URL (typically http://localhost:8080/)

## Assignment

For each Backbone view in `app/backbone/`, create a corresponding React component in `app/react/`. The root React component (`react/container.jsx`) has already been created and inserted into the DOM, but it is not fully implemented. The following diagram illustrates the component structure to build with React.

+------------------------------------+
|Container                           |
| +--------------------------------+ |
| |Status                          | |
| +--------------------------------+ |
| +--------------------------------+ |
| |List                            | |
| | +----------------------------+ | |
| | |List Item                   | | |
| | +----------------------------+ | |
| | +----------------------------+ | |
| | |List Item                   | | |
| | +----------------------------+ | |
| | +----------------------------+ | |
| | |List Item                   | | |
| | +----------------------------+ | |
| | +----------------------------+ | |
| | |List Item                   | | |
| | +----------------------------+ | |
| | +----------------------------+ | |
| | |List Item                   | | |
| | +----------------------------+ | |
| +--------------------------------+ |
+------------------------------------+

The functionality is pretty basic. Each list item corresponds to a person in `data.json`. Clicking on a person toggles its active state and the ListItem and Status components update to reflect. For any further clarification, take a look at the existing Backbone views.

## Bonus

Add extra styling to make the UI a bit more presentable. The less files are broken up by global.less, react.less and backbone.less and live in the `app/less` directory.