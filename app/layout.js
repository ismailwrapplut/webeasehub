import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";
import { NavbarDefault } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "WebEaseHub",
  description: "Made For FitnessPreneurs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <NavbarDefault />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
