import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ThemeContext from "./context/theme";

createRoot(document.getElementById('root')!).render(
  <ThemeContext.Provider value="light">
  <App />
</ThemeContext.Provider>,
)
