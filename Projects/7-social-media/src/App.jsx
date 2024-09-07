import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Sidebar from "./componets/Sidebar";
import CreatePost from "./componets/CreatePost";
import PostList from "./componets/PostList";
import { useState } from "react";
// import { Outlet } from "react-router-dom";
import PostListProvider from "./store/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;