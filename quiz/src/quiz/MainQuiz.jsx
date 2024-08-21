import Rewards from "./Rewards";
import Answers from "./Answers";
import QuestionDisplay from "./QuestionDisplay";
import { useEffect, useState } from "react";
export default function MainQuiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/question.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Učitani podaci:", data);
        setQuestions(data.questions || []); // Postavi pitanja, provjeri postoji li 'questions'
      })
      .catch((error) => console.error("Greška pri učitavanju pitanja:", error));
  }, []);

  return (
    <div className="MainDiv">
      {questions.length > 0 && (
        <QuestionDisplay quesitonnr={questions[0].question} />
      )}
      <Rewards />
      <Answers />
    </div>
  );
}
