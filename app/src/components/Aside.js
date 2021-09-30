import { Button, ButtonGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import React from "react";
import { NavLink, withRouter } from "react-router-dom";

class Aside extends React.Component {
  render() {
    return (
      <aside className="justify-space-between" style={{ overflow: "auto" }}>
        <ButtonGroup large={true} minimal={true} vertical={true}>
          <NavLink to="/">
            <Button title="Dashboard" icon={IconNames.DASHBOARD} />
          </NavLink>
          <NavLink to="/items">
            <Button title="Your Module" icon={IconNames.CODE_BLOCK} />
          </NavLink>
          <NavLink to="/contegris-airways">
            <Button title="Contegris Airways" icon={IconNames.HELICOPTER} />
          </NavLink>
        </ButtonGroup>
      </aside>
    );
  }
}

export default withRouter(Aside);
