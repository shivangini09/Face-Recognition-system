import './App.css';
import ScrollToTop from "react-scroll-to-top";
import Headerpage from './component/Headerpage';
import Abstract from './component/Abstract';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Team from './component/Team';
import Youtube from './component/Youtube';
import Problem from './component/Problem';
import ImageScroll from './component/ImageScroll';


function App() {
  return (
    
    <div className="App">
      <div className='component'>

      <Headerpage/>
      
      <ImageScroll/>
      <Navbar/>
      <Abstract/>
      <Problem/>
      <Youtube/>
      <Team/>
      <Footer/>
      </div>
        <ScrollToTop smooth />
    </div>
  );
}

export default App;
