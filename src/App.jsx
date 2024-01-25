import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/routes/Portfolio.jsx";
import Designs from "./components/routes/Designs.jsx";
import Paintings from "./components/routes/Paintings.jsx";
import Concepts from "./components/routes/Concepts.jsx";
import Persona from "./components/routes/Persona.jsx";
import Refuge from "./components/routes/Refuge.jsx";
import WebDev from "./components/routes/WebDev.jsx";
import Sets from "./components/routes/Sets.jsx";
import Contact from "./components/routes/Contact.jsx";
import Homepage from "./components/HomePage.jsx";

import "./App.css";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Portfolio" element={<Portfolio />}>
          <Route path="Sets" element={<Sets />} />
          <Route path="Designs" element={<Designs />} />
          <Route path="Paintings" element={<Paintings />} />
          <Route path="Concepts" element={<Concepts />} />
          <Route path="Persona" element={<Persona />} />
          <Route path="Refuge" element={<Refuge />} />
          <Route path="WebDev" element={<WebDev />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}
