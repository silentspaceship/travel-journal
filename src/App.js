import "./App.css";

import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";

function App() {
  return (
    <>
      <Navbar />
      <main className="content-container">
        <Post />
        <Post />
        <Post />
      </main>
    </>
  );
}

export default App;
