import { Accordion, Col, Form, Row } from 'react-bootstrap';

function TalentsForm(props) {
  const selectInitialTalents = [];
  for (let i = 1; i <= 9; i++) {
    selectInitialTalents.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  const selectFinalTalents = [];
  for (let i = 2; i <= 10; i++) {
    selectFinalTalents.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <Accordion className="col-12 col-sm-11 mx-auto my-3 text-dark">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Talentos</Accordion.Header>
        <Accordion.Body className="text-dark pb-5">
          <p className="h5 mx-3 my-3">Nível inicial</p>
          <Form.Group controlId="form-initial-talents" className="mb-5">
            <Row className="text-left text-sm-center">
              <Col className="col-12 col-sm-4 d-flex my-auto d-sm-block">
                <Form.Label className="col-6 col-sm-12">
                  Ataque Normal
                </Form.Label>
                <Form.Select
                  name="auto-attack-initial-level"
                  id="auto-attack-initial-level"
                  className="d-inline-block w-50 mx-auto"
                  value={props.NAInitialLevel}
                  onChange={(event) =>
                    props.setNAInitialLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectInitialTalents}
                </Form.Select>
              </Col>
              <Col className="col-12 col-sm-4 my-auto">
                <Form.Label className="col-6 col-sm-12 align-middle">
                  Habilidade Elemental
                </Form.Label>
                <Form.Select
                  name="elemental-skill-final-level"
                  id="elemental-skill-final-level"
                  className="d-inline-block w-50 mx-auto align-middle"
                  value={props.ESInitialLevel}
                  onChange={(event) =>
                    props.setESInitialLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectInitialTalents}
                </Form.Select>
              </Col>
              <Col className="col-12 col-sm-4 my-auto">
                <Form.Label className="col-6 col-sm-12 align-middle">
                  Explosão Elemental
                </Form.Label>
                <Form.Select
                  name="elemental-burst-final-level"
                  id="elemental-burst-final-level"
                  className="d-inline-block w-50 mx-auto align-middle"
                  value={props.EBInitialLevel}
                  onChange={(event) =>
                    props.setEBInitialLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectInitialTalents}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
          <p className="h5 mx-3 my-3">Nível final</p>
          <Form.Group controlId="form-final-talents">
            <Row className="text-left text-sm-center">
              <Col className="col-12 col-sm-4 d-flex my-auto d-sm-block">
                <Form.Label className="col-6 col-sm-12">
                  Ataque Normal
                </Form.Label>
                <Form.Select
                  name="auto-attack-final-level"
                  id="auto-attack-final-level"
                  className="d-inline-block w-50 mx-auto"
                  value={props.NAFinalLevel}
                  onChange={(event) =>
                    props.setNAFinalLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectFinalTalents}
                </Form.Select>
              </Col>
              <Col className="col-12 col-sm-4 my-auto">
                <Form.Label className="col-6 col-sm-12">
                  Habilidade Elemental
                </Form.Label>
                <Form.Select
                  name="elemental-skill-final-level"
                  id="elemental-skill-final-level"
                  className="d-inline-block w-50 mx-auto"
                  value={props.ESFinalLevel}
                  onChange={(event) =>
                    props.setESFinalLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectFinalTalents}
                </Form.Select>
              </Col>
              <Col className="col-12 col-sm-4 my-auto">
                <Form.Label className="col-6 col-sm-12">
                  Explosão Elemental
                </Form.Label>
                <Form.Select
                  name="elemental-burst-final-level"
                  id="elemental-burst-final-level"
                  className="d-inline-block w-50 mx-auto"
                  value={props.EBFinalLevel}
                  onChange={(event) =>
                    props.setEBFinalLevel(event.target.value)
                  }
                >
                  <option value=""></option>
                  {selectFinalTalents}
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default TalentsForm;
