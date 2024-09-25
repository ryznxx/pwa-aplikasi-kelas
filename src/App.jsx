import React from "react";
import { isMobile, isTablet } from "react-device-detect";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Unsuported from "./containers/pages/Unsuported/Unsuported";
import Home from "./containers/pages/Home/Home";

function App() {
  const detectDevice = () => {
    const userAgent = navigator.userAgent;
    let deviceType = "Desktop";

    if (/Mobi|Android/i.test(userAgent)) {
      deviceType = "Mobile";
    }

    sessionStorage.setItem("device", deviceType);
  };

  React.useEffect(() => {
    detectDevice();
  }, []);

  return (
    <>
      {(isTablet && isMobile) ||
      sessionStorage.getItem("device") === "Mobile" ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <>
          <Unsuported />
        </>
      )}
    </>
  );
}

export default App;
