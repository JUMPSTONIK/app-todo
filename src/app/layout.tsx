import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import './../sass/global.sass'

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "Rapptrs Lab todo app test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
