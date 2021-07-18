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

      <div className="mt-3 image-results d-flex justify-content-center">
        <div>
          <img src={
            props.images.payload.character.commonAscensionMaterials[0].iconUrl
          } alt="Material comum de uma estrela" />
          <p>x{props.data.commonMaterialsRarityOne}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.commonAscensionMaterials[1].iconUrl
          } alt="Material comum de duas estrelas" />
          <p>x{props.data.commonMaterialsRarityTwo}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.commonAscensionMaterials[2].iconUrl
          } alt="Material comum de três estrelas" />
          <p>x{props.data.ascensionGemsRarityThree}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.ascensionMaterials[0].iconUrl
          } alt="Material comum de ascensão de duas estrelas" />
          <p>x{props.data.ascensionGemsRarityTwo}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.ascensionMaterials[1].iconUrl
          } alt="Material comum de ascensão de três estrelas" />
          <p>x{props.data.ascensionGemsRarityThree}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.ascensionMaterials[2].iconUrl
          } alt="Material comum de ascensão de quatro estrelas" />
          <p>x{props.data.ascensionGemsRarityFour}</p>
        </div>
        <div>
          <img src={
            props.images.payload.character.ascensionMaterials[3].iconUrl
          } alt="Material comum de ascensão de cinco estrelas" />
          <p>x{props.data.ascensionGemsRarityFive}</p>
        </div>
        <div>
          {
            props.images.payload.character.ascensionMaterials[4] ? 
              <>
                <img src={
                  props.images.payload.character.ascensionMaterials[4].iconUrl
                } alt="Material de boss" /> 
                <p>x{props.data.eliteBossMaterials}</p>
              </>
              :
              ''
          }
        </div>
        <div>
          <img src={
            props.images.payload.character.localSpecialty.iconUrl
          } alt="Especialidade local" />
          <p>x{props.data.localSpecialities}</p>
        </div>
        <div>
          <img
            src="https://static.wikia.nocookie.net/gensin-impact/images/8/84/Item_Mora.png"
            alt="Mora" 
          />
          <p>{numberWithCommas(props.data.mora)}</p>
        </div>
      </div>
    </>
  )
}

export default Results;