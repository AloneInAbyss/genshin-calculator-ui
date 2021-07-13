import { Button, Form, Col, Row } from "react-bootstrap";
import Characters from "../utils/Characters";
import '../styles/Calculations.css';

function CharUpgrade() {
  let charactersOptions = [];
  for (let char of Characters) {
    charactersOptions.push(<option>{char}</option>);
  }

  return (
    <div>
      <h1 className="display-4 text-center py-3">Cálculos</h1>
      <h2 className="display-6 pt-2 pb-4">Melhoria de Personagem</h2>

      <Form>
        <Row className="align-items-center">
          <Col className="text-center">
            <img 
              src="https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/albedo/icon.png"
              alt="Imagem do personagem"
              className="img-150-white"
            />

            <Form.Group controlId="form-select-character">
              <Form.Label className="text-medium">Personagem</Form.Label>
              <Form.Control size="lg" as="select" className="selector-70 mx-auto">
                {charactersOptions}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="form-initial-level">
              <Form.Label className="text-medium">Nível inicial</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Digite o nível atual do personagem" />
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
              <Form.Control size="lg" type="text" placeholder="Digite o nível que deseja alcançar" />
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

          <Button size="lg" variant="danger" type="submit" className="w-25">
            Limpar
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CharUpgrade;