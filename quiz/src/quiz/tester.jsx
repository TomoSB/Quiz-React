export default function Rewards() {
  // Define your rewards in an array
  const rewards = [
    "1 MILLION",
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

  // Reverse the array
  const reversedRewards = [...rewards].reverse();

  return (
    <div className="RewardsDiv">
      {reversedRewards.map((reward, index) => (
        <p key={index}>{reward}</p>
      ))}
    </div>
  );
}
