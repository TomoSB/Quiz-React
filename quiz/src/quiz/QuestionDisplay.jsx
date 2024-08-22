import PropTypes from "prop-types";

export default function QuestionDisplay({ questionnr }) {
  console.log("Prikazujem pitanje:", questionnr);
  return <div className="QuestionDiv">{questionnr}</div>;
}

QuestionDisplay.propTypes = {
  questionnr: PropTypes.string,
};
