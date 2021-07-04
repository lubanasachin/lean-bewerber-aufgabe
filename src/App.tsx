import { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { HashRouter, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";

import DashboardPage from "./pages/DashboardPage";
import DetailsPage from "./pages/DetailsPage";

import { Toolbar, Typography } from "@material-ui/core";

class App extends Component<{}> {
  render() {
    return (
      <ThemeProvider
        theme={createMuiTheme({
          spacing: 8,
        })}
      >
        <HashRouter>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Welcome to Lean</Typography>
            </Toolbar>
          </AppBar>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/details/:id" component={DetailsPage} />
        </HashRouter>
      </ThemeProvider>
    );
  }
}

export default App;
