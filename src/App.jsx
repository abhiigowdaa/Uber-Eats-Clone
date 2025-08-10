import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'
import Header from './components/common/Header/Header';
import Hero from './components/common/Hero/Hero';
import BusinessSection from './components/common/BusinessSection/BusinessSection';
import CitiesNearMe from './components/common/CitiesNearMe/CitiesNearMe';
import Footer from './components/common/Footer/Footer';

function App() {

  return (
    
    <>
    <div className="max-w-7xl mx-auto">
      <Header /> 
      <Hero/>
      <BusinessSection/>
      <CitiesNearMe />
      <Footer/>
    </div>
      
    </>
  )
}

export default App
