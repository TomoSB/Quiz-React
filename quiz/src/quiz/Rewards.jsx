import PropTypes from "prop-types";

export default function Rewards({ correctAnswersCount }) {
  // Definirajte nagrade u nizu
  const rewards = [
    "1 MILIJUN",
    "$500000",
    "$250000",
    "$125000",
    "$64000",
    "$32000",
    "$16000",
    "$8000",
    "$4000",
    "$2000",
    "$1000",
    "$500",
    "$300",
    "$200",
    "$100",
  ];

  return (
    <div className="RewardsDiv">
      {rewards.map((reward, index) => {
        // Izračunaj treba li dodijeliti klasu na temelju broja točnih odgovora
        const isTrue = index >= rewards.length - correctAnswersCount;
        return (
          <p key={index} className={isTrue ? "True" : ""}>
            {reward}
          </p>
        );
      })}
    </div>
  );
}

Rewards.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired, // correctAnswersCount is required and must be a number
};
