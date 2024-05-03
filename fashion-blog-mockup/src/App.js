
import './App.css';
import BlogContent from './components.jsx/BlogContent';
import BlogImage from './components.jsx/BlogImage';
import BlogTitle from './components.jsx/BlogTitle';
import ContinueButton from './components.jsx/ContinueButton';
import HomePage from './components.jsx/HomePage';
import NavBar from './components.jsx/NavBar';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <NavBar/>
      <BlogTitle/>
      <BlogImage/>
      <BlogContent/>
      <ContinueButton/>
    </div>
  );
}

export default App;
