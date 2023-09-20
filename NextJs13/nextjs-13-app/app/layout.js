import { Roboto } from 'next/font/google';

import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tomi web',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: 'tienda, online, ecommerce',
};

const roboto = Roboto({
  weight: ['300', '400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin-ext'],
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
