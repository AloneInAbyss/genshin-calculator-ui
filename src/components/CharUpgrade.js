import { useState } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import TalentsForm from './TalentsForm';
import Characters from '../utils/Characters';
import '../styles/Calculations.css';

function getCharactersURL(
  initialLevel,
  finalLevel,
  initialAscension,
  finalAscension
) {
  let URL = 'https://genshin-calculator-api.herokuapp.com/ascension/character?';
  URL += 'initial-level=' + initialLevel;
  URL += '&final-level=' + finalLevel;
  URL += '&initial-ascension=' + initialAscension;
  URL += '&final-ascension=' + finalAscension;
  return URL;
}

function getImagesURL(character) {
  let myURL = 'https://genshin-calculator-api.herokuapp.com/material/character';
  let genshinApiURL =
    'https://genshin-app-api.herokuapp.com/api/characters/info/';

  let URL;
  if (character === 'Hu Tao') {
    // URL = genshinApiURL + 'Hutao';
    URL = myURL + '?character=Hutao';
  } else if (character === 'Kazuha') {
    URL = myURL + '?character=Kazuha';
  } else if (character === 'Traveler') {
    URL = genshinApiURL + 'Traveler (Anemo)';
  } else if (character === 'Aloy') {
    URL = myURL + '?character=Aloy';
  } else if (character === 'Ayaka') {
    URL = myURL + '?character=Ayaka';
  } else if (character === 'Kujou Sara') {
    URL = myURL + '?character=Sara';
  } else if (character === 'Raiden Shogun') {
    URL = myURL + '?character=Raiden';
  } else if (character === 'Sangonomiya Kokomi') {
    URL = myURL + '?character=Kokomi';
  } else if (character === 'Sayu') {
    URL = myURL + '?character=Sayu';
  } else if (character === 'Yoimiya') {
    URL = myURL + '?character=Yoimiya';
  } else {
    URL = genshinApiURL + character;
  }
  return URL;
}

function getCharacterTalentURL(initialLevel, finalLevel) {
  let URL = 'https://genshin-calculator-api.herokuapp.com/talent/character?';
  URL += 'initial-level=' + initialLevel;
  URL += '&final-level=' + finalLevel;
  return URL;
}

function CharUpgrade(props) {
  const [character, setCharacter] = useState(Object.keys(Characters)[0]);
  const [initialLevel, setInitialLevel] = useState('');
  const [finalLevel, setFinalLevel] = useState('');
  const [initialAscension, setInitialAscension] = useState('false');
  const [finalAscension, setFinalAscension] = useState('false');
  const [isInitialAscensionAvailable, setIsInitialAscensionAvailable] =
    useState(false);
  const [isFinalAscensionAvailable, setIsFinalAscensionAvailable] =
    useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [validated, setValidated] = useState(false);

  const [NAInitialLevel, setNAInitialLevel] = useState('');
  const [ESInitialLevel, setESInitialLevel] = useState('');
  const [EBInitialLevel, setEBInitialLevel] = useState('');
  const [NAFinalLevel, setNAFinalLevel] = useState('');
  const [ESFinalLevel, setESFinalLevel] = useState('');
  const [EBFinalLevel, setEBFinalLevel] = useState('');

  const charactersOptions = [];
  for (let char in Characters) {
    charactersOptions.push(
      <option key={char} value={char}>
        {char}
      </option>
    );
  }

  const verifyInitialAscension = (event) => {
    setInitialLevel(event.target.value);
    switch (event.target.value) {
      case '20':
      case '40':
      case '50':
      case '60':
      case '70':
      case '80':
        setIsInitialAscensionAvailable(true);
        break;
      default:
        setIsInitialAscensionAvailable(false);
        break;
    }
  };

  const verifyFinalAscension = (event) => {
    setFinalLevel(event.target.value);
    switch (event.target.value) {
      case '20':
      case '40':
      case '50':
      case '60':
      case '70':
      case '80':
        setIsFinalAscensionAvailable(true);
        break;
      default:
        setIsFinalAscensionAvailable(false);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    props.clearData();
    props.setTalentNA('');
    props.setTalentES('');
    props.setTalentEB('');

    const form = event.currentTarget;
    if (
      parseInt(initialLevel) > parseInt(finalLevel) ||
      (parseInt(initialLevel) === parseInt(finalLevel) &&
        initialAscension === 'true') ||
      (parseInt(initialLevel) === parseInt(finalLevel) &&
        finalAscension === 'false') ||
      (!isNaN(parseInt(initialLevel)) && isNaN(parseInt(finalLevel))) ||
      (isNaN(parseInt(initialLevel)) && !isNaN(parseInt(finalLevel))) ||
      parseInt(NAInitialLevel) >= parseInt(NAFinalLevel) ||
      parseInt(ESInitialLevel) >= parseInt(ESFinalLevel) ||
      parseInt(EBInitialLevel) >= parseInt(EBFinalLevel) ||
      (!isNaN(parseInt(NAInitialLevel)) && isNaN(parseInt(NAFinalLevel))) ||
      (isNaN(parseInt(NAInitialLevel)) && !isNaN(parseInt(NAFinalLevel))) ||
      (!isNaN(parseInt(ESInitialLevel)) && isNaN(parseInt(ESFinalLevel))) ||
      (isNaN(parseInt(ESInitialLevel)) && !isNaN(parseInt(ESFinalLevel))) ||
      (!isNaN(parseInt(EBInitialLevel)) && isNaN(parseInt(EBFinalLevel))) ||
      (isNaN(parseInt(EBInitialLevel)) && !isNaN(parseInt(EBFinalLevel)))
    ) {
      setErrorMessage(true);
    } else if (
      form.checkValidity() === false ||
      (initialLevel !== '' && !(parseInt(initialLevel) >= 1)) ||
      (initialLevel !== '' && !(parseInt(initialLevel) < 90)) ||
      (finalLevel !== '' && !(parseInt(finalLevel) > 1)) ||
      (finalLevel !== '' && !(parseInt(finalLevel) <= 90))
    ) {
      setErrorMessage(false);
    } else {
      setErrorMessage(false);

      if (!isNaN(parseInt(initialLevel)) && !isNaN(parseInt(finalLevel))) {
        props.fetchData(
          getCharactersURL(
            initialLevel,
            finalLevel,
            initialAscension,
            finalAscension
          )
        );
        props.fetchImages(getImagesURL(character));
      }

      function fetchTalentsData(url, callback) {
        fetch(url)
          .then((res) => res.json())
          .then((data) => callback(data))
          .catch((error) => {
            console.error('Error:', error);
          });
      }

      if (!isNaN(parseInt(NAInitialLevel)) && !isNaN(parseInt(NAFinalLevel))) {
        fetchTalentsData(
          getCharacterTalentURL(NAInitialLevel, NAFinalLevel),
          (data) => props.setTalentNA(data)
        );
      }

      if (!isNaN(parseInt(ESInitialLevel)) && !isNaN(parseInt(ESFinalLevel))) {
        fetchTalentsData(
          getCharacterTalentURL(ESInitialLevel, ESFinalLevel),
          (data) => props.setTalentES(data)
        );
      }

      if (!isNaN(parseInt(EBInitialLevel)) && !isNaN(parseInt(EBFinalLevel))) {
        fetchTalentsData(
          getCharacterTalentURL(EBInitialLevel, EBFinalLevel),
          (data) => props.setTalentEB(data)
        );
      }
    }

    setValidated(true);
  };

  const clearForm = (event) => {
    setInitialLevel('');
    setFinalLevel('');
    setInitialAscension('false');
    setFinalAscension('false');
    setIsInitialAscensionAvailable(false);
    setIsFinalAscensionAvailable(false);
    setErrorMessage(false);

    setNAInitialLevel('');
    setESInitialLevel('');
    setEBInitialLevel('');
    setNAFinalLevel('');
    setESFinalLevel('');
    setEBFinalLevel('');

    setValidated(false);
    props.clearData();
  };

  return (
    <>
      <h2 className="display-6 pt-2 pb-4 no-word-break">
        Melhoria de Personagem
      </h2>

      <Form
        className="scrollingContainer"
        onSubmit={handleSubmit}
        noValidate
        validated={validated}
      >
        <Row xs={1} sm={2} className="align-items-center">
          <Col className="text-center">
            <img
              src={Characters[character].img}
              alt="Imagem do personagem"
              className="max-w-150px b-white"
            />

            <Form.Group
              controlId="form-select-character"
              className="max-w-90 mx-auto"
            >
              <Form.Label className="text-medium">Personagem</Form.Label>
              <Form.Control
                size="lg"
                as="select"
                name="character"
                className="form-txt-input txt-select mx-auto"
                value={character}
                onChange={(event) => setCharacter(event.target.value)}
              >
                {charactersOptions}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col className="mt-4 mt-sm-0">
            <Form.Group
              controlId="form-initial-level"
              className="pt-2 pt-sm-0 position-relative"
            >
              <Form.Label className="text-medium">N??vel inicial</Form.Label>
              <div className="max-w-90 mx-auto">
                <Form.Control
                  size="lg"
                  type="number"
                  min="1"
                  max="89"
                  name="initial-level"
                  value={initialLevel}
                  className="form-txt-input mx-auto"
                  onChange={verifyInitialAscension}
                  placeholder="Digite o n??vel atual"
                />
                <Form.Control.Feedback tooltip type="invalid">
                  Digite um valor entre 1 e 89.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Row xs={1} md={2} className="align-items-center my-2">
              <Col className="text-center text-sm-start text-md-end">
                <Form.Label
                  id="initialAscensionText"
                  className={isInitialAscensionAvailable ? '' : 'text-muted'}
                >
                  Com ascens??o para os pr??ximos n??veis?
                </Form.Label>
              </Col>
              <Col className="text-center text-md-start">
                <Form.Check
                  inline
                  disabled={!isInitialAscensionAvailable}
                  name="initial-ascension"
                  type="radio"
                  id="initial-ascension-yes"
                  value="true"
                  label="Sim"
                  checked={initialAscension === 'true' ? true : false}
                  onChange={(e) => setInitialAscension(e.target.value)}
                />

                <Form.Check
                  inline
                  disabled={!isInitialAscensionAvailable}
                  name="initial-ascension"
                  type="radio"
                  id="initial-ascension-no"
                  value="false"
                  label="N??o"
                  checked={initialAscension === 'false' ? true : false}
                  onChange={(e) => setInitialAscension(e.target.value)}
                />
              </Col>
            </Row>

            <Form.Group
              controlId="form-final-level"
              className="pt-2 position-relative mt-4 mt-sm-0"
            >
              <Form.Label className="text-medium">N??vel final</Form.Label>
              <div className="max-w-90 mx-auto">
                <Form.Control
                  size="lg"
                  type="number"
                  min="2"
                  max="90"
                  name="final-level"
                  value={finalLevel}
                  className="form-txt-input mx-auto"
                  onChange={verifyFinalAscension}
                  placeholder="Digite o n??vel desejado"
                />
                <Form.Control.Feedback tooltip type="invalid">
                  Digite um valor entre 2 e 90.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Row xs={1} md={2} className="align-items-center my-2">
              <Col className="text-center text-sm-start text-md-end">
                <Form.Label
                  id="finalAscensionText"
                  className={isFinalAscensionAvailable ? '' : 'text-muted'}
                >
                  Com ascens??o para os pr??ximos n??veis?
                </Form.Label>
              </Col>
              <Col className="text-center text-md-start">
                <Form.Check
                  inline
                  disabled={!isFinalAscensionAvailable}
                  name="final-ascension"
                  type="radio"
                  id="final-ascension-yes"
                  value="true"
                  label="Sim"
                  checked={finalAscension === 'true' ? true : false}
                  onChange={(e) => setFinalAscension(e.target.value)}
                />

                <Form.Check
                  inline
                  disabled={!isFinalAscensionAvailable}
                  name="final-ascension"
                  type="radio"
                  id="final-ascension-no"
                  value="false"
                  label="N??o"
                  checked={finalAscension === 'false' ? true : false}
                  onChange={(e) => setFinalAscension(e.target.value)}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <TalentsForm
          NAInitialLevel={NAInitialLevel}
          setNAInitialLevel={setNAInitialLevel}
          ESInitialLevel={ESInitialLevel}
          setESInitialLevel={setESInitialLevel}
          EBInitialLevel={EBInitialLevel}
          setEBInitialLevel={setEBInitialLevel}
          NAFinalLevel={NAFinalLevel}
          setNAFinalLevel={setNAFinalLevel}
          ESFinalLevel={ESFinalLevel}
          setESFinalLevel={setESFinalLevel}
          EBFinalLevel={EBFinalLevel}
          setEBFinalLevel={setEBFinalLevel}
        />

        <div
          className={
            errorMessage
              ? 'error-message text-center'
              : 'error-message d-none text-center'
          }
        >
          Verifique se os valores digitados est??o corretos!
        </div>

        <Row className="mt-4 d-flex justify-content-center">
          <Col className="text-center text-sm-end mt-1">
            <Button
              size="lg"
              variant="primary"
              type="submit"
              className="w-100 form-btn"
              id="btn-calculate"
            >
              Calcular
            </Button>
          </Col>
          <Col className="text-center text-sm-start mt-1">
            <Button
              size="lg"
              variant="danger"
              className="w-100 form-btn"
              onClick={clearForm}
            >
              Limpar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default CharUpgrade;
