import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Lucas Maia | Fisioterapeuta Especializado em Coluna",
  description: "Tratamento especializado para dores na coluna. Fisioterapia focada em coluna, dor crônica e reabilitação funcional, com recursos modernos e abordagem baseada em movimento. CREFITO-4: 292009-F",
  keywords: "fisioterapeuta, coluna, hérnia de disco, dor lombar, dor ciática, quiropraxia, fisioterapia, tratamento de coluna",
  authors: [{ name: "Lucas Maia" }],
  openGraph: {
    title: "Dr. Lucas Maia | Fisioterapeuta Especializado em Coluna",
    description: "Tratamento especializado para dores na coluna. Avaliação detalhada. Tratamento individual. Movimento sem medo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${outfit.variable} ${playfair.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
