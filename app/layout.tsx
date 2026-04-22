import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from 'next/font/google';

// I-setup ang Fredoka font
const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Teacher Julliana | Early Childhood Educator",
  description: "Portfolio of Julliana Vidania, a passionate BECED graduate from Colegio de San Pascual Baylon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Ginamit natin ang fredoka.className dito para sa buong body */}
      <body className={`${fredoka.className} antialiased bg-[#FFFBEB] text-slate-800`}>
        {children}
      </body>
    </html>
  );
}