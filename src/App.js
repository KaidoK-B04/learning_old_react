import React, { useState, useRef } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", body: "Description" },
    { id: 2, title: "Javascript 2", body: "Description" },
    { id: 3, title: "Javascript 3", body: "Description" },
  ]);

  const [title, setTitle] = useState("");

  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  };

  return (
    <div className="App">
      <form>
        {/* {CONTROLLED COMPONENT} */}
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title"
        />
        {/* {UNCONTROLLED COMPONENT} */}
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Post Description"
        />
        <MyButton onClick={addNewPost}>Make post</MyButton>
      </form>
      <PostList posts={posts} title="Posts of JS" />
    </div>
  );
}

export default App;
