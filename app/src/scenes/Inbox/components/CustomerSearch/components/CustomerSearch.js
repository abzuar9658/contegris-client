import { Button, Dialog, Intent, Classes, InputGroup, Icon, Tooltip } from '@blueprintjs/core';
import React, { Component }                                           from 'react';
import { connect }                                                    from "react-redux";
import { IconNames }                                                  from '@blueprintjs/icons';
import styles                                                         from '../customerSearch.module.css';

class CustomerSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      filterValue: ''
    };
  };

  toggleDialog = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
  };

  render() {

    const { filterValue } = this.state;

    const SearchButton = (
      <Tooltip content={ `Search contact` }>
        <Button
          icon={ IconNames.SEARCH }
          intent={ Intent.PRIMARY }
          minimal={ true }
          onClick={ () => console.log('Search a contact') }
        />
      </Tooltip>
    );

    return (
      <div className={ styles['button-container'] }>
        <Button
          icon={ IconNames.SEARCH }
          text="Search Contact"
          intent={ Intent.NONE }
          onClick={ this.toggleDialog }

        />

        <Dialog
          onClose={ this.toggleDialog }
          isOpen={ this.state.isOpen }
          autoFocus={ true }
          canEscapeKeyClose={ true }
          canOutsideClickClose={ true }
          title="Search a contact"
        >
          <div className={ Classes.DIALOG_BODY }>
            <InputGroup
              large={ true }
              onChange={ (event) => {
                this.setState({ filterValue: event.target.value })
              } }
              placeholder="Search by company, name or contact"
              rightElement={ SearchButton }
              value={ filterValue }
            />

            <div className={ styles['result-parent-container'] }>
              <p className={ styles['result-title'] }>RESULTS</p>
              <div className={ styles['result-parent'] }>
                <div>
                  <Icon
                    icon={ IconNames.NEW_PERSON }
                    intent={ Intent.PRIMARY }
                    iconSize={ 20 }
                  />
                </div>
                <div className={ styles['result-middle-child'] }>Hubspot, Check (hubspot.com)</div>
                <div>
                  <Button
                    intent={ Intent.NONE }
                    small={ true }
                    minimal={ false }
                    text="Select"/>
                </div>
              </div>

              <div className={ styles['result-parent'] }>
                <div>
                  <Icon
                    icon={ IconNames.NEW_PERSON }
                    intent={ Intent.PRIMARY }
                    iconSize={ 20 }
                  />
                </div>
                <div className={ styles['result-middle-child'] }>Hubspot, Check (hubspot.com)</div>
                <div>
                  <Button
                    intent={ Intent.NONE }
                    small={ true }
                    minimal={ false }
                    text="Select"/>
                </div>
              </div>
            </div>

            <div className={ styles['create-contact-parent-container'] }>
              <p>Can't find the contact you're looking for ?</p>

              <Button
                intent={ Intent.NONE }
                text="Create a contact"
                style={ { marginTop: '10px' } }
              />
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    //
  }
}

const mapActions = {};

export default connect(mapStateToProps, mapActions)(CustomerSearch);
