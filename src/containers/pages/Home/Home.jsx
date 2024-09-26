import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Boxname from "../../components/boxname/Boxname";
import "./Home.scss";
import Inputsearch from "../../components/inputsearch/Inputsearch";
import Eventbox from "../../components/eventbox/Eventbox";
import Taskbox from "../../components/taskbox/Taskbox";

const Home = () => {
  return (
    <main className="container-home">
      <Navbar />
      <Boxname />
      <Inputsearch />
      <Eventbox />
      <Taskbox />
    </main>
  );
};

export default Home;
