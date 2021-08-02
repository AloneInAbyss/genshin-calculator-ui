function TalentsResult(props) {
  if (!props.renderNA && !props.renderES && !props.renderEB) return <></>;

  let mora = 0;
  if (props.renderNA) {
    mora += props.talentNA.mora;
  }
  if (props.renderES) {
    mora += props.talentES.mora;
  }
  if (props.renderEB) {
    mora += props.talentEB.mora;
  }

  return (
    <>
      <h3 className="mt-5 mb-3">Talentos: </h3>
      <p>Mora: {mora}</p>
    </>
  );
}

export default TalentsResult;
