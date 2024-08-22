import Rewards from "./Rewards";
import Answers from "./Answers";
import QuestionDisplay from "./QuestionDisplay";
import { useEffect, useState } from "react";

export default function MainQuiz() {
  const [questions, setQuestions] = useState([]);

  let qCount = 0;

  useEffect(() => {
    fetch("/question.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Učitani podaci:", data);
        setQuestions(data.questions || []); // Postavi pitanja, provjeri postoji li 'questions'
      })
      .catch((error) => console.error("Greška pri učitavanju pitanja:", error));
  }, []);

  console.log("Trenutna pitanja:", questions); // Proveri vrednosti pitanja
  console.log("Trenutni qCount:", qCount); // Proveri vrednost qCount

  return (
    <div className="MainDiv">
      {questions.length > 0 && (
        <QuestionDisplay
          questionnr={questions[0]?.question || "Nema pitanja"}
        />
      )}
      <Rewards />
      {questions.length > 0 && (
        <Answers
          ans0={questions[0]?.answer[0] || ""}
          ans1={questions[0]?.answer[1] || ""}
          ans2={questions[0]?.answer[2] || ""}
          ans3={questions[0]?.answer[3] || ""}
        />
      )}
    </div>
  );
}
