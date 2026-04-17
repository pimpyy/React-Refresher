import { ThemeProvider } from "@mui/material/styles";
import { CssBaseLine } from "@mui/material/CssBaseline";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("app")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseLine />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);