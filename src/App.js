import './App.css';
import Nav from "./comp/nav/nav";
import Intro from "./comp/intro/intro"
import Section1 from "./comp/sections/section1";
import Section2 from './comp/sections/section2';
import Section3 from './comp/sections/section3';
import Footer from './comp/footer/footer';

function App() {
  return (
  <>
    <Nav/>
    <Intro />
    <h1 id="intro2023" className ="years display-5 text-white text-center bg-primary">2023 and upcoming releases</h1>
    <Section1 />
    <h1 id="intro2022" className ="years display-5 text-white text-center bg-primary">2022 releases</h1>
    <Section2 />
    <h1 id="intro2021" className ="years display-5 text-white text-center bg-primary">2021 releases</h1>
    <Section3 />
    <Footer />
  </>
  );
}

export default App;
