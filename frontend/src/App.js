import NavBar from "./components/NavBar";
import { ModelProvider } from "./context/ModelContext";
import Form from "./pages/Form";

function App() {
  return (
    <ModelProvider>
      <div
        className="App"
        style={{ height: "100vh", maxWidth: "75%", margin: "0 auto" }}
      >
        <NavBar />
        <Form />
      </div>
    </ModelProvider>
  );
}

export default App;
