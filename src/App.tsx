import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Shopaholic from "./pages/Shopaholic";
import Contact from "./pages/Contact";
import NotFound from "./pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/shopaholic" element={<Shopaholic />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
