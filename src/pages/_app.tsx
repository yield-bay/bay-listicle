// NextJS Imports
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// Stylesheet Imports
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
