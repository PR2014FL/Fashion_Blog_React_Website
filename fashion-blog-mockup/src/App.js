
import './App.css';
import BlogContent from './components.jsx/BlogContent';
import BlogImage from './components.jsx/BlogImage';
import BlogTitle from './components.jsx/BlogTitle';
import ContinueButton from './components.jsx/ContinueButton';
import HomePage from './components.jsx/HomePage';
import NavBar from './components.jsx/NavBar';
import { content } from './models/content.js';
import { footerLinks, navLinks } from './models/links.js';
import Brooklyn from './Images/Brooklyn.png';
import Models from './Images/threeFashionModels.png'
import FooterLinks from './components.jsx/FooterLinks.jsx';
import Footer from './components.jsx/Footer.jsx';

function App() {


  return (
    <div className="App">
      <HomePage/>
      <NavBar content={navLinks}/>
      <BlogTitle content={content[0]}/>
      <BlogImage src={Brooklyn} alt={content[0]}/>
      <BlogContent content={content[0]}/>
      <ContinueButton/>
      <hr/>
      <BlogTitle content={content[1]}/>
      <BlogImage src={Models} alt={content[1]}/>
      <BlogContent content={content[1]}/>
      <ContinueButton/>
      <FooterLinks content={footerLinks}/>
      <Footer/>
    </div>
  );
}

export default App;
