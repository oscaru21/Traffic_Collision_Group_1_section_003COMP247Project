import { useMediaQuery } from "@mui/material";
import NavBar from "./components/NavBar";
import { ModelProvider } from "./context/ModelContext";
import Form from "./pages/Form";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      mobile: 600, // Specify a custom breakpoint for mobile devices
    },
  },
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
  const isMobile = useMediaQuery(darkTheme.breakpoints.down('mobile'));

  return (
    <ThemeProvider theme={darkTheme}>
      <ModelProvider>
        <div
          className="App"
          style={{ height: "100vh", maxWidth: isMobile ? "100%" : "75%", margin: "0 auto" }}
        >
          <NavBar />
          <Form />
        </div>
      </ModelProvider>
    </ThemeProvider>
  );
}

export default App;
