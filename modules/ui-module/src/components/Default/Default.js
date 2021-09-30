import React                             from 'react';
import { NonIdealState, Button, Intent } from "@blueprintjs/core";
import { IconNames }                     from '@blueprintjs/icons';
import { connect }                       from 'react-redux';
import './Default.scss';

class Default extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={ "module-container" }>
        <NonIdealState
          title="Welcome"
          description="Load your module here"
          icon={ IconNames.CODE_BLOCK }
          children={
            <Button
              text={ "Details" }
              intent={ Intent.PRIMARY }
              small={ true }
              onClick={ () => this.props.history.push(`/items/details`) }
            />
          }
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(Default);
