import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Horizons - AI Club at PCC",
  description: "Official website for AI Horizons, hosted by Artificial Intelligence Club at PCC",
  openGraph: {
    title: "AI Horizons - AI Club at PCC",
    description: "Official website for AI Horizons, hosted by Artificial Intelligence Club at PCC",
    images:[
      {
        url:"./images/flyers/aibanner.png",
      }
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
