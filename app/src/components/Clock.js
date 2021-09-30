import { Button, Intent } from '@blueprintjs/core';
import moment             from 'moment';
import React              from 'react';

export default class Clock extends React.Component {

  timer = {
    start: () => {
      this.interval = setInterval(() => {
        this.setState({ time: moment().format('MMMM Do YYYY, h:mm:ss a') });
      }, 1000)
    },

    stop: () => {
      clearInterval(this.interval);
    }
  };

  constructor(props) {
    super(props);

    this.state = { time: '' };
  }

  componentDidMount() {
    this.timer.start();
  }

  componentWillUnmount() {
    this.timer.stop();
  }

  render() {
    const { time } = this.state;

    return (
      <div className='flex' style={ { marginRight: '1em' } }>
        <Button
          intent={ Intent.PRIMARY }
          minimal={ true }
          style={ {
            background: 'var(--background)',
            border: 'var(--border)',
            marginRight: '0.6em',
          } }
          text={ time }
        />
      </div>
    );
  }
}
