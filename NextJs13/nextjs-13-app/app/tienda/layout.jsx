import Link from 'next/link';

export const metadata = {
  title: 'My Store',
};

const TiendaLayout = ({ children }) => {
  return (
    <>
      <ul>
        <h3>Seccion tienda</h3>
        <li>
          <Link href='/tienda/categorias'>Categorias</Link>
        </li>
        <li>
          <Link href='/tienda/categorias/computadoras'>Computadoras</Link>
        </li>
      </ul>

      {children}
    </>
  );
};

export default TiendaLayout;
