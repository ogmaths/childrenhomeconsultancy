import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/home";
import PreRegistration from "./pages/pre-registration";
import InspectionReadiness from "./pages/inspection-readiness";
import PostRegistration from "./pages/post-registration";
import Contact from "./pages/contact";

import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pre-registration" element={<PreRegistration />} />
          <Route
            path="/inspection-readiness"
            element={<InspectionReadiness />}
          />
          <Route path="/post-registration" element={<PostRegistration />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        <Footer />
      </>
    </Suspense>
  );
}

export default App;
