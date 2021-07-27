import { Col, Row } from 'react-bootstrap';
import '../styles/Results.css';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function Results(props) {  
  if (!props.data || !props.data.length > 1 || !props.images)
    return (
      <>
      </>
    );

  return (
    <>
      <hr className="mt-5" />

      <h2>Resultado: </h2>

      <Row className="mt-3 image-results xs-max-250px row justify-content-center mx-auto">
        <Col xs="5" sm="2">
          {
            props.images.payload.character.ascensionMaterials[4] ? 
              <>
                <div className="image-container">
                  <img src={
                    props.images.payload.character.ascensionMaterials[4].iconUrl
                  } alt="Material de boss" /> 
                </div>
                <p>x{props.data.eliteBossMaterials}</p>
              </>
              :
              ''
          }
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.localSpecialty.iconUrl
            } alt="Especialidade local" />
          </div>
          <p>x{props.data.localSpecialities}</p>
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img
              src="https://static.wikia.nocookie.net/gensin-impact/images/2/26/Item_Hero's_Wit.png"
              alt="Livro de experiência" 
            />
          </div>
          <p>x{props.data.expBooks}</p>
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img
              src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Mora.png"
              alt="Mora" 
            />
          </div>
          <p>{numberWithCommas(props.data.mora)}</p>
        </Col>
      </Row>
      <Row className="mt-3 image-results xs-max-250px row justify-content-center mx-auto">
        <Col xs="5" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.ascensionMaterials[0].iconUrl
            } alt="Material comum de ascensão de duas estrelas" />
          </div>
          <p>x{props.data.ascensionGemsRarityTwo}</p>
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.ascensionMaterials[1].iconUrl
            } alt="Material comum de ascensão de três estrelas" />
          </div>
          <p>x{props.data.ascensionGemsRarityThree}</p>
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.ascensionMaterials[2].iconUrl
            } alt="Material comum de ascensão de quatro estrelas" />
          </div>
          <p>x{props.data.ascensionGemsRarityFour}</p>
        </Col>
        <Col xs="5" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.ascensionMaterials[3].iconUrl
            } alt="Material comum de ascensão de cinco estrelas" />
          </div>
          <p>x{props.data.ascensionGemsRarityFive}</p>
        </Col>
      </Row>
      <Row className="mt-3 image-results xs-max-350px row justify-content-center mx-auto">
        <Col xs="4" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.commonAscensionMaterials[0].iconUrl
            } alt="Material comum de uma estrela" />
          </div>
          <p>x{props.data.commonMaterialsRarityOne}</p>
        </Col>
        <Col xs="4" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.commonAscensionMaterials[1].iconUrl
            } alt="Material comum de duas estrelas" />
          </div>
          <p>x{props.data.commonMaterialsRarityTwo}</p>
        </Col>
        <Col xs="4" sm="2">
          <div className="image-container">
            <img src={
              props.images.payload.character.commonAscensionMaterials[2].iconUrl
            } alt="Material comum de três estrelas" />
          </div>
          <p>x{props.data.ascensionGemsRarityThree}</p>
        </Col>
      </Row>
    </>
  )
}

export default Results;