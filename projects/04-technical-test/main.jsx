import { React, createRoot } from 'react-dom/client'
import './style.css'

import App from './src/components/App'

const root = createRoot(document.getElementById('app'))
// Enter point
root.render(
  <App />
)
