import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import Characters from "../utils/Characters";
import '../styles/Calculations.css';

function CharUpgrade() {
  const [charImg, setCharImg] = useState('');
  const [validated, setValidated] = useState(false);
  const [initialLevel, setInitialLevel] = useState('');
  const [finalLevel, setFinalLevel] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [isInitialAscensionAvailable, setIsInitialAscensionAvailable] = useState(false);
  const [isFinalAscensionAvailable, setIsFinalAscensionAvailable] = useState(false);

  const charactersOptions = [];
  for (let char in Characters) {
    charactersOptions.push(<option key={char} value={char}>{char}</option>);
  }

  const verifyInitialAscension = (event) => {
    setInitialLevel(event.target.value);
    switch(event.target.value) {
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
  }
  const verifyFinalAscension = (event) => {
    setFinalLevel(event.target.value);
    switch(event.target.value) {
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
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !(parseInt(initialLevel) >= 1) ||
      !(parseInt(initialLevel) < 90) ||
      !(parseInt(finalLevel) > 1) ||
      !(parseInt(finalLevel) <= 90) ||
      parseInt(initialLevel) >= parseInt(finalLevel)
    ) {
      if (parseInt(initialLevel) >= parseInt(finalLevel))
        setErrorMessage(true);
      else
        setErrorMessage(false);

      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  const clearForm = (event) => {
    setInitialLevel('');
    setFinalLevel('');
    setIsInitialAscensionAvailable(false);
    setIsFinalAscensionAvailable(false);
    setErrorMessage(false);

    setValidated(false);
  }

  return (
    <>
      <h2 className="display-6 pt-2 pb-4">Melhoria de Personagem</h2>

      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <Row className="align-items-center">
          <Col className="text-center">
            <img 
              src={charImg ? Characters[charImg].img : Characters[Object.keys(Characters)[0]].img}
              alt="Imagem do personagem"
              className="max-w-150px b-white"
            />

            <Form.Group controlId="form-select-character">
              <Form.Label className="text-medium">Personagem</Form.Label>
              <Form.Control 
                size="lg"
                as="select"
                name="character"
                className="max-w-70 mx-auto"
                onChange={(event) => setCharImg(event.target.value)}
              >
                {charactersOptions}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="form-initial-level" className="position-relative">
              <Form.Label className="text-medium">Nível inicial</Form.Label>
              <div className="max-w-90 mx-auto">
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  min="1" max="89"
                  name="initial-level"
                  value={initialLevel}
                  onChange={verifyInitialAscension}
                  placeholder="Digite o nível atual"
                />
                <Form.Control.Feedback tooltip type="invalid">
                  Digite um valor entre 1 e 89.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <div key="initial-ascension" className="my-2">
              <Row className="align-items-center">
                <Col className="text-right">
                  <Form.Label
                    id="initialAscensionText"
                    className={isInitialAscensionAvailable ? '' : 'text-muted' }
                  >
                    Com ascensão para os próximos níveis?
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Check 
                    inline
                    disabled={!isInitialAscensionAvailable}
                    name="initial-ascension"
                    type="radio"
                    id="initial-ascension-yes"
                    value="yes"
                    label="Sim"
                  />

                  <Form.Check
                    inline
                    disabled={!isInitialAscensionAvailable}
                    defaultChecked
                    name="initial-ascension"
                    type="radio"
                    id="initial-ascension-no"
                    value="no"
                    label="Não"
                  />
                </Col>
              </Row>
            </div>

            <Form.Group controlId="form-final-level" className="pt-2 position-relative">
              <Form.Label className="text-medium">Nível final</Form.Label>
              <div className="max-w-90 mx-auto">
                <Form.Control
                  required
                  size="lg"
                  type="number"
                  min="2" max="90"
                  name="final-level"
                  value={finalLevel}
                  onChange={verifyFinalAscension}
                  placeholder="Digite o nível desejado"
                />
                <Form.Control.Feedback tooltip type="invalid">
                  Digite um valor entre 2 e 90.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <div key="final-ascension" className="my-2">
              <Row className="align-items-center">
                <Col className="text-right">
                  <Form.Label
                    id="finalAscensionText"
                    className={isFinalAscensionAvailable ? '' : 'text-muted' }
                  >
                    Com ascensão para os próximos níveis?
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Check 
                    inline
                    disabled={!isFinalAscensionAvailable}
                    name="final-ascension"
                    type="radio"
                    id="final-ascension-yes"
                    value="yes"
                    label="Sim"
                  />

                  <Form.Check
                    inline
                    disabled={!isFinalAscensionAvailable}
                    defaultChecked
                    name="final-ascension"
                    type="radio"
                    id="final-ascension-no"
                    value="no"
                    label="Não"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div
          className={
            errorMessage ?
            "error-message text-center" :
            "error-message d-none text-center"
          }
        >O nível inicial deve ser maior que o final!</div>

        <div className="mt-3 d-flex justify-content-center">
          <Button size="lg" variant="primary" type="submit" className="w-25" id="btn-calculate">
            Calcular
          </Button>

          <Button size="lg" variant="danger" className="w-25" onClick={clearForm}>
            Limpar
          </Button>
        </div>
      </Form>
    </>
  )
}

export default CharUpgrade;