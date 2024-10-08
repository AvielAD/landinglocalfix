import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap-icons/font/bootstrap-icons.css'

import HeaderComponent from '@/app/components/header'

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

export const metadata: Metadata = {
  title: "Localfix",
  description: "Reparación de celulares y computadoras",
};

const opciones = [
  {
    ruta: 'Inicio',
    uri: '/'
  },
  {
    ruta: 'Laptops',
    uri: '/laptops'
  },
  {
    ruta: 'Servicios',
    uri: '/servicios'
  },
  {
    ruta: 'Team',
    uri: '/laptops'
  },
  {
    ruta: 'Contacto',
    uri: '/laptops'
  },

]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent options={opciones}></HeaderComponent>

        {children}
      </body>
    </html>
  );
}
