import "./App.scss";

import { Navbar } from "./components/Navbar";
import { Post } from "./components/Post";

import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <main className="content-container">
        {data.map((item) => (
          <Post key={item.id} item={item} />
        ))}
      </main>
    </>
  );
}

export default App;
