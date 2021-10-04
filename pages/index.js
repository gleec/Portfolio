import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Portfolio />
      </Layout>
    </>
  );
}
