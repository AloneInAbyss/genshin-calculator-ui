import { useState } from 'react';
import { Container } from 'react-bootstrap';
import CharUpgrade from './components/CharUpgrade';
import Results from './components/Results';
import './styles/App.css';

function App() {
  const [data, setData] = useState();
  const [images, setImages] = useState();
  const [talentNA, setTalentNA] = useState();
  const [talentES, setTalentES] = useState();
  const [talentEB, setTalentEB] = useState();

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const fetchImages = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const clearData = () => {
    setData();
  };

  return (
    <Container fluid="md">
      <main id="content" className="col-12 col-lg-8 mx-auto bg-dark text-light">
        <h1 className="display-4 text-center py-3">Genshin Calculator</h1>
        <CharUpgrade
          fetchData={fetchData}
          fetchImages={fetchImages}
          clearData={clearData}
          talentNA={talentNA}
          setTalentNA={setTalentNA}
          talentES={talentES}
          setTalentES={setTalentES}
          talentEB={talentEB}
          setTalentEB={setTalentEB}
        />
        <Results
          data={data}
          images={images}
          talentNA={talentNA}
          talentES={talentES}
          talentEB={talentEB}
        />
      </main>
    </Container>
  );
}

export default App;
