import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import "tippy.js/dist/tippy.css";

export default function MrlolDev({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
