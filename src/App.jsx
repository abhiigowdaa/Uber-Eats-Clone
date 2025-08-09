import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './App.css'
import Header from './components/common/Header/Header';
import Hero from './components/common/Hero/Hero';

function App() {

  return (
    <>
      <Header /> 
      <Hero/>
      
      
    </>
  )
}

export default App
