import FilmesBar from './components/FilmesBar'
import './App.css';
import FilmesList from './components/FilmesList';

const App = () => {
  return (
    <div className="App">
      <FilmesBar />
      <main>
        <FilmesList />
      </main>
    </div>
  );
}

export default App;
