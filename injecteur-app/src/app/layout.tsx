import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "./components";


export const metadata: Metadata = {
  title: "Desktop Hub",
  description: "The most powerfull DeskTops in the world.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <br />
        <Footer />
      </body>
    </html>
  );
}
