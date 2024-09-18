import { RouterProvider } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./context/theme";

import router from "./routes"

const App = () => {
  const currentTheme = useContext(ThemeContext)
  return (
    <div>
      {currentTheme}
      <RouterProvider router={router} />
    </div>
  );
}
export default App;