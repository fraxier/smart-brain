import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Logo from "./components/Logo/logo";
import Navigation from "./components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className + " overflow-x-hidden"}>
        <Providers>
          <main className="w-screen flex flex-col p-24 gap-10">
            <div className="w-full flex flex-row justify-between">
                <Logo />
                <Navigation />
            </div>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
