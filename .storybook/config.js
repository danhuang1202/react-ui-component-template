import { configure } from '@storybook/react'

function loadStories() {
  let req = require.context('../stories', true, /.(tsx|ts)$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
