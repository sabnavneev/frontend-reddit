import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Reddit from "./pages/reddit/Reddit";
import Memes from "./pages/memes/Memes";
import Subreddit from "./pages/subreddit/Subreddit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subreddit/:banaan" element={<Subreddit />} />
        <Route path="/reddit" element={<Reddit />} />
        <Route path="/memes" element={<Memes />} />
      </Routes>
    </>
  );
}

export default App;
