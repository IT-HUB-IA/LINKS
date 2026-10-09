import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://links.it-ia.tec.br"),
  title: "IT.IA · Links",
  description: "Fale com a IT.IA, conheça o site e o catálogo de sistemas.",
  openGraph: { title: "IT.IA · Links", description: "Fábrica de sistemas. Fale com um especialista, conheça o site e o CicloDev.", images: ["/og.png"], locale: "pt_BR", type: "website" },
  icons: { icon: "/icone.svg", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = { themeColor: "#F7F5F0" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
