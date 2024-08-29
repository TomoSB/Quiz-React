import PropTypes from "prop-types";

export default function Lost({ correctAnswersCount }) {
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
    "0",
  ];

  // Izračunaj osvojeni iznos temeljen na broju točnih odgovora
  const reward =
    rewards[rewards.length - correctAnswersCount - 1] || "Nema nagrade";

  return (
    <div className="GameOver">
      <div>Izgubili ste. Osvojili ste: {reward}</div>
    </div>
  );
}

Lost.propTypes = {
  correctAnswersCount: PropTypes.number.isRequired, // correctAnswersCount is required and must be a number
};
