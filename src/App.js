import "./App.css";
import Navbar from "./navbar";

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  //const person = {name: 'yoshi', age: 30};

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        {/* <p>{person}</p> */}
      </div>
    </div>
  );
}

export default App;
