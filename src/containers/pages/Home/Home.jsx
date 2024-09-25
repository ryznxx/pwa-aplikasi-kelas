import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Boxname from "../../components/boxname/Boxname";
import "./Home.scss";
import Inputsearch from "../../components/inputsearch/Inputsearch";

const Home = () => {
  return (
    <main className="container-home">
      <Navbar />
      <Boxname />
      <Inputsearch />
    </main>
  );
};

export default Home;
