import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>CropSpot Market</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}