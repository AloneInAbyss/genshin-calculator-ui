import CharUpgrade from './components/CharUpgrade';
import './styles/App.css';

function App() {
  return (
    <div className="container">
      <main id="content" className="col-8 mx-auto bg-dark text-light">
        <h1 className="display-4 text-center py-3">Cálculos</h1>
        <CharUpgrade />
      </main>
    </div>
  );
}

export default App;
