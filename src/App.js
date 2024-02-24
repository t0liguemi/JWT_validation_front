import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import injectContext, { Context } from "./store/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import singinView from "./views/signin";
import signupView from "./views/signup";
import Sidebar from "./components/sidebar";
import Privateview from "./views/private";
import PublicView from "./views/public";

function App() {
  const { store, actions } = useContext(Context);
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path="/signin" Component={singinView}/>
          <Route path="/signup" Component={signupView}/>
          <Route path="/public/:viewID" Component={PublicView}/>
          <Route path="/private/:viewID" Component={Privateview}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
