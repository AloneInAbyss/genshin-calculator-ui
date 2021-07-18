import { useState } from "react";
import CharUpgrade from './components/CharUpgrade';
import Results from './components/Results';
import './styles/App.css';

function App() {
  const [data, setData] = useState();
  const [images, setImages] = useState();

  const fetchData = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data));
  }

  const fetchImages = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {setImages(data);console.log(data)});
  }

  const clearData = () => {
    setData();
  }

  return (
    <div className="container">
      <main id="content" className="col-8 mx-auto bg-dark text-light">
        <h1 className="display-4 text-center py-3">Cálculos</h1>
        <CharUpgrade fetchData={fetchData} fetchImages={fetchImages} clearData={clearData} />
        <Results data={data} images={images} />
      </main>
    </div>
  );
}

export default App;
