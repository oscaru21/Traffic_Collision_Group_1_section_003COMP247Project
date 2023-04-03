import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Stats from "./pages/Stats";

function App() {
  return (
    <div className="App" style={{height: '100vh', maxWidth: '75%', margin: '0 auto'}}>
      <NavBar/>
      <Map/>
      <Stats />
    </div>
  );
}

export default App;
