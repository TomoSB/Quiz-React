import PropTypes from "prop-types";

export default function Answers({ ans0, ans1, ans2, ans3, onAnswerClick }) {
  //console.log(" answers je pozvana");
  return (
    <>
      <div className="AnswerDiv">
        <div className="ans" onClick={() => onAnswerClick(0)}>
          {ans0}
        </div>
        <div className="ans" onClick={() => onAnswerClick(1)}>
          {ans1}
        </div>
        <div className="ans" onClick={() => onAnswerClick(2)}>
          {ans2}
        </div>
        <div className="ans" onClick={() => onAnswerClick(3)}>
          {ans3}
        </div>
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
