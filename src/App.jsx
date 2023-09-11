import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./pages/Feed";
import VideoDetail from "./pages/VideoDetail";
import Header from "./componenets/Header";

function App() {
  return (
    // BrowserRouter > Routes > Route
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video" element={<VideoDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
