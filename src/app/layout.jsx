import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "BlinkFind",
  description: "BlinkFind is transforming into a cutting-edge startup dedicated to identifying and solving realworld problems through innovative solutions. Our focus is on addressing challenges faced by users, businesses, and communities by developing faster, more secure, and optimized applications, websites, AI-driven solutions, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          <Toaster position="top-right"/>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
