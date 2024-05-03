import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import JobPostsPage from "./components/JobPostsPage";
import JobPostDetail from "./components/JobPostDetail";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to={"/jobposts"} />} />
            <Route path="/jobposts" element={<JobPostsPage />} />
            <Route path="/jobposts/:id" element={<JobPostDetail />} />
          </Routes>
          <ToastContainer style={{ width: "auto" }} />
        </div>
      </main>
    </>
  );
}

export default App;
