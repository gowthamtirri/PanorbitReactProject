import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Profile } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/profile/:id" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
