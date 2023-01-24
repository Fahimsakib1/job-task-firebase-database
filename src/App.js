import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import BackToTopButton from './BackToTopButton/BackToTopButton';

function App() {
  return (
    <div >
      <Header></Header>
      <Home></Home>
      <BackToTopButton></BackToTopButton>
    </div>
  );
}

export default App;
