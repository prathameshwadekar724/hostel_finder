import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
  title: "Hostel Finder",
  icons:{
    icon:"/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  description: "Find hostels near your preferred location",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
