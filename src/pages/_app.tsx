// NextJS Imports
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// Stylesheet Imports
import "../styles/globals.css";
import useFathomSetup from "@hooks/useFathomSetup";

const App = ({ Component, pageProps }: AppProps) => {
  useFathomSetup(process.env.NEXT_PUBLIC_FATHOM_CODE as string);
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
