import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Banqu from "./components/Banqu";
 import Button from "@mui/material/Button";
  // language
import { useTranslation } from "react-i18next";
const Theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Cairo",
    },
  },
});

console.log("mounting App");
function App() {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <div
      className="App"
      style={{ direction: i18n.language === "en" ? "ltr" : "rtl" }}
    >
      <header className="App-header">
        <ThemeProvider theme={Theme}>
          <Banqu t={t} i18n={i18n} />
        </ThemeProvider>
      </header>
      <Button onClick={() => toggleLang()} variant="outlined">
        {t("language")}
      </Button>
    </div>
  );
}

export default App;
