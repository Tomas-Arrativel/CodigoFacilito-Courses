import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NextCRUD',
  description: 'A tasks CRUD application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='container mx-auto'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
