import '../styles/Results.css';

function Results(props) {  
  if (!props.data || !props.data.length > 1)
    return (
      <>
      </>
    );

  return (
    <>
      <hr className="mt-5" />

      <h2>Resultado: </h2>
      <code>Mora: {props.data.mora}</code>
      <code>Material Comum 1: {props.data.commonMaterialsRarityOne}</code>
      <code>Material Comum 2: {props.data.commonMaterialsRarityTwo}</code>
      <code>Material Comum 3: {props.data.commonMaterialsRarityThree}</code>
      <code>Material de Boss 1: {props.data.ascensionGemsRarityTwo}</code>
      <code>Material de Boss 2: {props.data.ascensionGemsRarityThree}</code>
      <code>Material de Boss 3: {props.data.ascensionGemsRarityFour}</code>
      <code>Material de Boss 4: {props.data.ascensionGemsRarityFive}</code>
      <code>Items de Boss: {props.data.eliteBossMaterials}</code>
      <code>Especialidades: {props.data.localSpecialities}</code>
    </>
  )
}

export default Results;