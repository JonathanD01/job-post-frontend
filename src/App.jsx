import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import JobPostDetail from "./components/JobPostDetail";

import "react-toastify/dist/ReactToastify.css";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import JobPostsPageParent from "./components/JobPostsPageParent";

function App() {
  return (
    <>
      <main className="main">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/jobposts" element={<JobPostsPageParent />} />
            <Route path="/jobposts/:id" element={<JobPostDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer style={{ width: "auto" }} />
        </div>
        <footer>
          <p
            style={{
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Build {process.env.NODE_ENV}. A demo project&nbsp;
            <Link
              to={"https://github.com/JonathanD01/job-post-frontend"}
              target="_blank"
            >
              (https://github.com/JonathanD01/job-post-frontend)
            </Link>
          </p>
        </footer>
      </main>
    </>
  );
}

export default App;
