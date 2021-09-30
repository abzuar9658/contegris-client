import React             from 'react';
import { connect }       from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Default           from './components/Default';
import Details           from './components/Details';

class Item extends React.Component {

  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={ match.path } component={ Default }/>
        <Route exact path={ '/items/details' } component={ Details }/>
      </Switch>
    );
  }
}

export default connect()(Item);