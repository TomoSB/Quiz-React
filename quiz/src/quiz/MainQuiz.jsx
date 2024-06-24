import QuestionDisplay from "./QuestionDisplay";
import Answers from "./Answers";
import Rewards from "./Rewards";

export default function MainQuiz() {
  return (
    <div className="MainDiv">
      <QuestionDisplay />
      <Rewards />
      <Answers />
    </div>
  );
}
