import React from "react";
import "./Taskbox.scss";

const Taskbox = ({ terbaru }) => {
  return (
    <section className="container-taskbox">
      <h2>Tugas {terbaru}</h2>
      <section className="taskbox-list">
        <p id="taskbox-sj">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          adipisci rerum excepturi.
        </p>
        <section className="taskbox-list-wrapper">
          <div className="taskbox-item">
            <img src="" alt="kok" />
            <div className="taskbox-item-info">
              <p>oke</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Taskbox;
