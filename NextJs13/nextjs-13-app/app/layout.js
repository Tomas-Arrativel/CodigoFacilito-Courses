export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <nav>
          <h2>My navbar</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
