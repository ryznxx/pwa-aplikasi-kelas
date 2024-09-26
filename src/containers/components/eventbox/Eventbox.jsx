import React, { useState, useRef } from "react";
import "./Eventbox.scss";

const Eventbox = () => {
  const scrollRef = useRef(null);
  const [activeBut, setActiveBut] = useState(null);

  const handleScroll = () => {
    const eventboxes = document.querySelectorAll(".eventbox-atas");
    if (scrollRef.current.scrollLeft > 0) {
      eventboxes.forEach((eventbox) => eventbox.classList.add("active"));
    } else {
      eventboxes.forEach((eventbox) => eventbox.classList.remove("active"));
    }
  };

  return (
    <section className="container-eventbox">
      <div className="eventbox-atas">
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="eventbox-atas-scroll"
        >
          <span
            className={`${
              activeBut === "list" ? "active" : ""
            } material-symbols-rounded`}
            id="close"
            onClick={() => setActiveBut("list")}
          >
            view_list
          </span>
          <span
            className={`${
              activeBut === "close" ? "active" : ""
            } material-symbols-rounded`}
            id="close"
            onClick={() => setActiveBut("close")}
          >
            close
          </span>
          <button
            className={`${activeBut === "hari-ini" ? "active" : ""}`}
            id="hari-ini"
            onClick={() => setActiveBut("hari-ini")}
          >
            Hari ini
          </button>
          <button
            className={`${activeBut === "besok" ? "active" : ""}`}
            id="besok"
            onClick={() => setActiveBut("besok")}
          >
            Besok
          </button>
          <button
            className={`${activeBut === "kemarin" ? "active" : ""}`}
            id="kemarin"
            onClick={() => setActiveBut("kemarin")}
          >
            Kemarin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Eventbox;
