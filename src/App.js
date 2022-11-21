import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextBox from "./Components/TextBox";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#00001a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const ColorRedMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#330000";
      showAlert("Red mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const ColorPurpleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a000d";
      showAlert("Purple mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const ColorGreenMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0d1a00";
      showAlert("Green mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "White";
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <div>
      <Router>
        <Navbar
          title="TextUTils"
          mode={mode}
          toggleMode={toggleMode}
          colorRedmode={ColorRedMode}
          colorPurplemode={ColorPurpleMode}
          colorGreenmode={ColorGreenMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* <Route exact element={<About mode={mode} heading="About Us" />} path="/about" /> */}
            <Route exact element={<TextBox
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />} path="" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
