import "./App.css";
function App() {
  const handleclick = () => {
    alert("button clicked");
  };

  const handlemouseover = () => {
    alert("mouse on red div");
  };

  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>

      <div className="red" onMouseOver={handlemouseover}>
        i am red div
      </div>
      <div>
      <button onClick={shoot}>Take the shot!</button>
      </div>
    </>
  );
}

export default App;
