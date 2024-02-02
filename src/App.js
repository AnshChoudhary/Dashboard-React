import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';


function App() {
  const [theme, colorMode] = useMode();

  return (<ColorModeContext.Provider value= {colorMode}>
    <div className="app"></div>;
    </ColorModeContext.Provider>
  );
}

export default App;
