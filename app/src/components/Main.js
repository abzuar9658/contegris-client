import { IconNames } from "@blueprintjs/icons";
import Item from "@intellicon/ui-module";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { NonIdealState } from "@blueprintjs/core";
import ContegrisAirways from "@intellicon/contegris-airways";
export default class Main extends React.Component {
  render() {
    const mainModule = () => {
      return (
        <NonIdealState
          title="Welcome into dasboard"
          description="Load module here"
          icon={IconNames.CODE_BLOCK}
        />
      );
    };

    return (
      <main className="scenes">
        <Switch>
          <Route exact path="/" component={mainModule} />
          <Route path="/items" component={Item} />
          <Route path="/contegris-airways" component={ContegrisAirways} />
        </Switch>
      </main>
    );
  }
}
