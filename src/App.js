import "./app.css";
import "./style.css";

function App() {
  return (
    <>
      {/** ------- Aufgabe 1 ----- */}
      <button>Button 1</button>
      <button style={{ 
        color: "#f78d00", 
        fontSize: "20px", 
        backgroundColor:"red"}}> 
        Button 2</button>

      {/** ------- Aufgabe 2 ----- */}
      <div id="Elternelement"style={
        {display: "flex", 
        flexDirection: "row",
        width: "500px",
        border: "2px dashed grey",
        justifyContent: "center"}}>
          <div className="Kinder">Kinder</div>
          <div className="Kinder">Kinder</div>
          <div className="Kinder">Kinder</div>
          <span>Span</span>
      </div>
      
    </>
  );
}

export default App;
