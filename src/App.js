import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPost from "./UserPost";
import Paginate from "./Paginate";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Paginate />} />
        <Route path="/:id" element={<UserPost />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
