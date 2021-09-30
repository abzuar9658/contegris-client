import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Aside from "./components/Aside";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Main from "./components/Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex flex-row flex-fill">
          <Aside />
          <Main />
        </div>

        <Footer>
          <div className="flex">
            <div
              style={{
                marginLeft: "0.6em",
                marginRight: "0.5em",
                border: "var(--border)",
                borderRadius: "1em",
                width: "2.2em",
                background: "palegreen",
                textAlign: "center",
              }}
            >
              <p style={{ marginTop: "0.4em", color: "var(--border)" }}>
                <b>AB</b>
              </p>
            </div>
          </div>

          <div className="flex">
            <Clock />
          </div>
        </Footer>
      </React.Fragment>
    );
  }
}

export default withRouter(connect()(App));
