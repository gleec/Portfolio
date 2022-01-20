import Head from 'next/head';
import NavBar from './NavBar';
import Script from 'next/script';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Glery Cardoza Portfolio</title>
      <meta name="descripcion" content="Glery Cardoza Portfolio" />
    </Head>
    <NavBar />
    <main>{children}</main>
    <Script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossOrigin="anonymous"
    />
  </>
);

export default Layout;
