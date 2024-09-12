import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

export default function App() {


  return (
    <>
      <header>
        <div className="container">
          <Navbar />
        </div>
      </header>

      <section className='news-section'>
        <div className="container">
          <News />
        </div>
      </section>

      

    </>
  )
}



