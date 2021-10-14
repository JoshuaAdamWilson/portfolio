import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllPosts from "./components/Blog/AllPosts";
import Home from "./components/Home.js/Home";
import OnePost from "./components/Blog/OnePost"
import Footer from "./components/Footer/Footer"
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Switch>
            <Route exact path='/' render= {() => (
              <Home />
            )} />
            <Route exact path='/blog' render={() => (
              <AllPosts />
            )} />
            <Route component={OnePost} path="/blog/:slug" />
            <Route component={Portfolio} path="/portfolio" />
          </Switch>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
