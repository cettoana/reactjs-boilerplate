import React from 'react'
import { render } from 'react-dom'

import styles from './root.css'

const mountNode = document.getElementById('root')

const Root = () => (
  <div className={styles.root}>
    Hello, World!
  </div>
)

render(<Root />, mountNode)
