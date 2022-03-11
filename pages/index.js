import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <Projects/>
      </Layout>
    </>
  );
}
