import PropTypes from "prop-types";

export default function Answers({ ans0, ans1, ans2, ans3, onAnswerClick }) {
  //console.log(" answers je pozvana");
  return (
    <>
      <div className="AnswerDiv">
        <div onClick={() => onAnswerClick(ans0)}>{ans0}</div>
        <div onClick={() => onAnswerClick(ans1)}>{ans1}</div>
        <div onClick={() => onAnswerClick(ans2)}>{ans2}</div>
        <div onClick={() => onAnswerClick(ans3)}>{ans3}</div>
      </div>
    </>
  );
}
Answers.propTypes = {
  ans0: PropTypes.string.isRequired,
  ans1: PropTypes.string.isRequired,
  ans2: PropTypes.string.isRequired,
  ans3: PropTypes.string.isRequired,
  onAnswerClick: PropTypes.func.isRequired,
};
