import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Posts from "../screens/post";
import SinglePost from "../screens/singlepost";
import Comments from "../screens/comments";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";
import SignUp from "../screens/signup";
import Login from "../screens/login";
import ProtectedRoute from "./protectedroute";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">Posts</Link>
          <Link to="signup">SignUp</Link>
          <Link to="login">LogIn</Link>
          <Link to="dashboard">Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard/*" element={<ProtectedRoute Component={Dashboard}/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="comments" element={<Comments />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="login" element={<Login/>} />
          <Route path="commentform/:id" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
