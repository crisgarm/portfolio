import React, { useState } from "react";
import "../stylesheets/App.scss";
import DATA from "../services/data.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App = () => {
  const [projects] = useState(DATA);

  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
