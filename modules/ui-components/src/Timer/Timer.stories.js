import { storiesOf } from "@storybook/react"
import React         from 'react'
import Timer         from './Timer';

storiesOf('Timer', module)
  .add('default', () => {
    return (
      <Timer
        date={ new Date() }
        render={ (date) => {
          return (
            <p>{ date.toString() }</p>
          )
        } }
      />
    )
  })
  .add('with delay', () => {
    return (
      <Timer
        delay={ 2000 }
        date={ new Date() }
        render={ (date) => <p>{ date.toString() }</p> }
      />
    )
  })
