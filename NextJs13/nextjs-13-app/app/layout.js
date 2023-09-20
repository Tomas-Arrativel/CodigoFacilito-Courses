import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Tomi web',
  description: 'Esta es la pagina principal de mi tienda',
  keywords: 'tienda, online, ecommerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
