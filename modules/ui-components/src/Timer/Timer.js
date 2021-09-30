import * as PropTypes from 'prop-types'
import React          from 'react'

export default function Timer(props) {
  const [now, setNow] = React.useState(props.date)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date(now.setSeconds(now.getSeconds() + props.delay / 1000)))
    }, props.delay)

    return () => clearInterval(interval)
  }, [now])

  return props.render(now)
}

Timer.propTypes = {
  delay: PropTypes.number,
  date: PropTypes.instanceOf(Date).isRequired,
  render: PropTypes.func.isRequired,
}

Timer.defaultProps = {
  delay: 1000
}
