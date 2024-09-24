import { isMobile, isTablet } from "react-device-detect";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Unsuported from "./containers/pages/Unsuported/Unsuported";

function App() {
  return (
    <>
      {!isTablet && !isMobile ? (
        <Routes>
          <Route path="/" element={<p>oke</p>} />
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
