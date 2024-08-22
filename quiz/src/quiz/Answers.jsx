import PropTypes from "prop-types";

export default function Answers({ ans0, ans1, ans2, ans3 }) {
  //console.log(" answers je pozvana");
  return (
    <>
      <div className="AnswerDiv">
        <div>{ans0}</div>
        <div>{ans1}</div>
        <div>{ans2}</div>
        <div>{ans3}</div>
      </div>
    </>
  );
}
Answers.propTypes = {
  ans0: PropTypes.string.isRequired,
  ans1: PropTypes.string.isRequired,
  ans2: PropTypes.string.isRequired,
  ans3: PropTypes.string.isRequired,
};
