import PropTypes from "prop-types";

export default function QuestionDisplay({ quesitonnr }) {
  return <div className="QuestionDiv">{quesitonnr}</div>;
}

QuestionDisplay.propTypes = {
  quesitonnr: PropTypes.string.isRequired,
};
