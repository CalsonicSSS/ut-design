import About from '@/components/home/About';
import ChooseContent from '@/components/home/ChooseContent';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ResourceFlow from '@/components/home/ResourceFlow';
import CrisisBanner from '@/components/layout/CrisisBanner';
import CleverleylabHeader from '@/components/layout/CleverleylabHeader';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <CrisisBanner />
      <CleverleylabHeader />
      <Hero />
      <About />
      <ResourceFlow />
      <ChooseContent />
      <Footer />
    </main>
  );
}
