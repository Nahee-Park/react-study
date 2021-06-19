import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Info, Login, Main, Nav } from "./pages";

function App() {
  const [userInfo, setUserInfo] = React.useState("devstone");
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/login/:id" component={Login} />
        <Route
          exact
          path="/info"
          render={(props) => <Info {...props} userInfo={userInfo} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
