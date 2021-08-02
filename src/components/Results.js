import '../styles/Results.css';
import TalentsResult from './TalentsResult';
import AscensionResult from './AscensionResult';

// setTimeout(() => {
//   window.scrollTo(
//     0,
//     document.querySelector('.scrollingContainer').scrollHeight
//   );
// }, 1000);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function Results(props) {
  if (
    (!props.data || !props.data.length > 1 || !props.images) &&
    (!props.talentNA || !props.talentNA.length > 1) &&
    (!props.talentES || !props.talentES.length > 1) &&
    (!props.talentEB || !props.talentEB.length > 1)
  )
    return <></>;

  let renderAscension = true;

  if (!props.data || !props.data.length > 1 || !props.images) {
    renderAscension = false;
  }

  let renderNA = true;
  let renderES = true;
  let renderEB = true;

  if (!props.talentNA) renderNA = false;
  if (!props.talentES) renderES = false;
  if (!props.talentEB) renderEB = false;

  return (
    <>
      <hr className="mt-5" />

      <h2>Resultado: </h2>

      <AscensionResult
        numberWithCommas={numberWithCommas}
        renderAscension={renderAscension}
        images={props.images}
        data={props.data}
      />

      <TalentsResult
        renderNA={renderNA}
        renderES={renderES}
        renderEB={renderEB}
        talentNA={props.talentNA}
        talentES={props.talentES}
        talentEB={props.talentEB}
      />
    </>
  );
}

export default Results;
