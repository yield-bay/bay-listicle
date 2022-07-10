// NextJS Imports
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import useAnalyticsSetup from "@hooks/useAnalyticsSetup";

// Stylesheet Imports
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  useAnalyticsSetup(
    process.env.NEXT_PUBLIC_FATHOM_CODE as string,
    process.env.NEXT_PUBLIC_AMPLITUDE_CODE as string
  );
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
