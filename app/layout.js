import "./globals.css";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "My Auth App",
  description: "NextAuth Authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <main className="main-content">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}