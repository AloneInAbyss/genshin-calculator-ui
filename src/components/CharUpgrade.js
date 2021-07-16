import { useState } from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import Characters from "../utils/Characters";
import '../styles/Calculations.css';

function CharUpgrade() {
  const [charImg, setCharImg] = useState('');
  const [validated, setValidated] = useState(false);
  let initialLevel, finalLevel;

  const charactersOptions = [];
  for (let char in Characters) {
    charactersOptions.push(<option key={char} value={char}>{char}</option>);
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (
      form.checkValidity() === false ||
      !(initialLevel >= 1) ||
      !(initialLevel < 90) ||
      !(finalLevel > 1) ||
      !(finalLevel <= 90) ||
      initialLevel > finalLevel
    ) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  }

  const clearForm = (event) => {
    initialLevel = undefined;
    finalLevel = undefined;

    setValidated(false);
  }

  return (
    <div>
      <h1 className="display-4 text-center py-3">Cálculos</h1>
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
            <Form.Group controlId="form-initial-level">
              <Form.Label className="text-medium">Nível inicial</Form.Label>
              <Form.Control
                required
                size="lg"
                type="number"
                min="1" max="89"
                name="initial-level"
                value={initialLevel}
                onChange={(e) => initialLevel = e.target.value}
                className="max-w-90 mx-auto"
                placeholder="Digite o nível atual"
              />
              <Form.Control.Feedback type="invalid" className="max-w-90 mx-auto">
                Digite um valor entre 1 e 89.
              </Form.Control.Feedback>
            </Form.Group>

            <div key="initial-ascension" className="my-2">
              <Row className="align-items-center">
                <Col className="text-right">
                  <Form.Label className="text-muted">Com ascensão para o próximo nível?</Form.Label>
                </Col>
                <Col>
                  <Form.Check 
                    inline
                    disabled
                    name="initial-ascension"
                    type="radio"
                    id="initial-ascension-yes"
                    value="Yes"
                    label="Sim"
                  />

                  <Form.Check
                    inline
                    disabled
                    defaultChecked
                    name="initial-ascension"
                    type="radio"
                    id="initial-ascension-no"
                    value="No"
                    label="Não"
                  />
                </Col>
              </Row>
            </div>

            <Form.Group controlId="form-final-level" className="pt-2">
              <Form.Label className="text-medium">Nível final</Form.Label>
              <Form.Control
                required
                size="lg"
                type="number"
                min="2" max="90"
                name="final-level"
                value={finalLevel}
                onChange={(e) => finalLevel = e.target.value}
                className="max-w-90 mx-auto"
                placeholder="Digite o nível desejado"
              />
              <Form.Control.Feedback type="invalid" className="max-w-90 mx-auto">
                Digite um valor entre 2 e 90.
              </Form.Control.Feedback>
            </Form.Group>

            <div key="final-ascension" className="my-2">
              <Row className="align-items-center">
                <Col className="text-right">
                  <Form.Label className="text-muted">Com ascensão para o próximo nível?</Form.Label>
                </Col>
                <Col>
                  <Form.Check 
                    inline
                    disabled
                    name="final-ascension"
                    type="radio"
                    id="final-ascension-yes"
                    value="Yes"
                    label="Sim"
                  />

                  <Form.Check
                    inline
                    disabled
                    defaultChecked
                    name="final-ascension"
                    type="radio"
                    id="final-ascension-no"
                    value="No"
                    label="Não"
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <div className="mt-3 d-flex justify-content-center">
          <Button size="lg" variant="primary" type="submit" className="w-25" id="btn-calculate">
            Calcular
          </Button>

          <Button size="lg" variant="danger" className="w-25" onClick={clearForm}>
            Limpar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CharUpgrade;