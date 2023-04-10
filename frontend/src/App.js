import NavBar from "./components/NavBar";
import { ModelProvider } from "./context/ModelContext";
import Form from "./pages/Form";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#865DFF',
    },
    mode: "dark",
    background: {
    },
    text: {
      primary: "#865DFF",
      secondary: "#E384FF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <ModelProvider>
        <div
          className="App"
          style={{ height: "100vh", maxWidth: "75%", margin: "0 auto" }}
        >
          <NavBar />
          <Form />
        </div>
      </ModelProvider>
    </ThemeProvider>
  );
}

export default App;
