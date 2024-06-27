import Rewards from "./Rewards";
import Answers from "./Answers";
import QuestionDisplay from "./QuestionDisplay";

export default function MainQuiz() {
  return (
    <div className="MainDiv">
      <QuestionDisplay />
      <Rewards />
      <Answers />
    </div>
  );
}
