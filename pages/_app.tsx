import { CommandProvider } from "#/context/commandContext";
import { DarkmodeProvider } from "#/context/darkmodeContext";
import { SidebarProvider } from "#/context/sidebarContext";
import "#/styles/globals.css";
import "#/styles/prism.css";
import "#/styles/progress.css";
import Layout from "#/ui/layout/Layout";
import type { AppProps } from "next/app";
import { Unbounded, Space_Grotesk } from "@next/font/google";

const display = Unbounded({ subsets: ["latin"], variable: "--display-font" });
const font = Space_Grotesk({ subsets: ["latin"], variable: "--standard-font" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CommandProvider>
        <SidebarProvider>
          <DarkmodeProvider>
            <Layout className={`${font.className} ${display.variable}`}>
              <Component {...pageProps} />
            </Layout>
          </DarkmodeProvider>
        </SidebarProvider>
      </CommandProvider>
    </>
  );
}

export default MyApp;
