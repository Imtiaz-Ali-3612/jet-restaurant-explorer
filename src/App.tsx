import React from "react";
import { ThemeProvider } from "./ThemeContext"; // Import your ThemeProvider
import ToggleTheme from "./ThemeToggle";
const App = () => {
  return (
    <ThemeProvider>
      <div>
          WELCOME TO JET
      </div>
    </ThemeProvider>
  );
};

export default App;
