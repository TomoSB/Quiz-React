import Rewards from "./Rewards";
import Answers from "./Answers";
import QuestionDisplay from "./QuestionDisplay";
import { useEffect, useState } from "react";

export default function MainQuiz() {
  const [questions, setQuestions] = useState([]);

  const [qCount, setQCount] = useState(0);

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Praćenje točnih odgovora

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

  const handleAnswerClick = (answer) => {
    if (answer === "da") {
      setQCount((prevCount) => prevCount + 1); // Povećava qCount
      setCorrectAnswersCount((prevCount) => prevCount + 1); // Povećava count točnih odgovora
    } else {
      console.log("Wrong answer :(");
    }
  };

  return (
    <div className="MainDiv">
      {questions.length > 0 && (
        <QuestionDisplay
          questionnr={questions[qCount]?.question || "No questions"}
        />
      )}
      <Rewards correctAnswersCount={correctAnswersCount} />
      {questions.length > 0 && (
        <Answers
          ans0={questions[qCount]?.answer[0] || ""}
          ans1={questions[qCount]?.answer[1] || ""}
          ans2={questions[qCount]?.answer[2] || ""}
          ans3={questions[qCount]?.answer[3] || ""}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}
