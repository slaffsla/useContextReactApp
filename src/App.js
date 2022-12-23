import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Profile } from "./pages/Profile";
import { Navbar } from "./pages/Navbar";
import { ErrorPage } from "./pages/ErrorPage";
import { useState, createContext } from "react";

export const AppContext = createContext();

export default function App() {
  const [username, setUsername] = useState("slasla");

  return (
    <div className="App">
      <AppContext.Provider value={{ username, setUsername }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home username={username} />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile/"
              element={
                <Profile username={username} setUsername={setUsername} />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}
