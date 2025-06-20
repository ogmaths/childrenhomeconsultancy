import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/home";
import PreRegistration from "./pages/pre-registration";
import InspectionReadiness from "./pages/inspection-readiness";
import PostRegistration from "./pages/post-registration";
import Contact from "./pages/contact";
import Resources from "./pages/resources";
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
          <Route path="/resources" element={<Resources />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
