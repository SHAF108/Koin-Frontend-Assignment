
import './App.css';
import Navbar from './components/Navbar';
import BitcoinSection from './components/BitcoinSection';
import Menu from './components/Menu';
import Performance from './Performance';
import Fundamentals from './Fundamentals';
import Sentiment from './Sentiment';
import AboutBitcoinSection from './AboutBitcoinSection';
import Team from './Team';
import Tokenomics from './Tokenomics';
import YouMayAlsoLike from './YouMayAlsoLike';
import GetStarted from './components/GetStarted';
import TrendingCoins from './TrendingCoins';
import CryptoCurrencies from './CryptoCurrencies';

// import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className='bg-indigo-100 w-full h-screen'>
      <Navbar/> 
      <div className="bg-indigo-100 w-full h-screen">
        <CryptoCurrencies/>
        <BitcoinSection />
        <Menu/>
        <Performance />
        
        <Sentiment />
        <AboutBitcoinSection/>
        <Tokenomics/>
        <Team/>
        <YouMayAlsoLike/>
        <GetStarted/>
        <TrendingCoins/>
      </div>
    </div>
  );
}

export default App;
