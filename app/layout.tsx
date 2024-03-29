import type { Metadata } from "next";
import './styles/custom.scss'
import { NavBar } from "./components/navbar/NavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container-fluid px-0 main-content">
          <NavBar />
          {children}
        </main>        
      </body>
    </html>
  );
}