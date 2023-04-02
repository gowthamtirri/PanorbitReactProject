import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, Profile, ToDo, Gallery, Posts } from "./pages";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/profile/:id" element={<Profile />} />
      <Route exact path="/profile/:id/posts" element={<Posts />} />
      <Route exact path="/profile/:id/gallery" element={<Gallery />} />
      <Route exact path="/profile/:id/todo" element={<ToDo />} />
    </Routes>
  </BrowserRouter>
);

export default App;
