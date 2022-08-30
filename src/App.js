import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";


function App() {
  const [mode, setMode] = useState("light"); // Checking wheather mode is dark or not
  const [alert, setAlert] = useState(null); // Setting the alert message state

  // Method to show the Alert
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  // Toggle the dark or light mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b5576";
      showAlert("Dark mode has been enabled.", "success");
      //document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled.", "success");
      //document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          title="TextUtils"
          linkName="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container mt-4">

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route exact path="/" element={<TextForm
                heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces"
                mode={mode}
                showAlert={showAlert}
              />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
