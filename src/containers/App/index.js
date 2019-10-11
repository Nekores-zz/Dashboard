import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Layout from "../Layout";
import Dashboard from "../Dashboard";
const theme = createMuiTheme({
  typography: {
    fontFamily: ["Rubik", "sans-serif"].join(),
    letterSpacing: '1.2px'
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Route path="/" exact component={() => <Dashboard />} />
          <Route path="/setting" component={() => <div>settings</div>} />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
