import React                             from 'react';
import { NonIdealState, Button, Intent } from "@blueprintjs/core";
import { IconNames }                     from '@blueprintjs/icons';
import { connect }                       from 'react-redux';
import './Details.scss';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={ "module-container" }>
        <NonIdealState
          title="Item details"
          description="Load your detail module here"
          icon={ IconNames.CODE_BLOCK }
          children={
            <Button
              text={ "Back" }
              intent={ Intent.PRIMARY }
              small={ true }
              onClick={ () => this.props.history.push(`/items`) }
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

export default connect(mapStateToProps)(Details);
