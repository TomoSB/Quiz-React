import Rewards from "./Rewards";
import Answers from "./Answers";
import QuestionDisplay from "./QuestionDisplay";
import { useEffect, useState } from "react";
import Lost from "./Lost";
import Milionare from "./Milionare";

export default function MainQuiz() {
  const [questions, setQuestions] = useState([]);
  const [qCount, setQCount] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Praćenje točnih odgovora
  const [isLost, setIsLost] = useState(false); // Praćenje gubitka igre

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

  const handleAnswerClick = (selectedAnswerIndex) => {
    if (selectedAnswerIndex === questions[qCount].correctAns) {
      setCorrectAnswersCount((prevCount) => prevCount + 1); // Povećava count tačnih odgovora
    } else {
      console.log("Krivi odgovor :(");
      setIsLost(true); // Postavi isLost na true ako je odgovor netočan
    }
    setQCount((prevCount) => prevCount + 1); // Povećava qCount
  };

  // Provjeri je li igra izgubljena ili je broj odgovorenih pitanja veći od 14
  if (isLost) {
    return <Lost correctAnswersCount={correctAnswersCount} />;
  }
  if (qCount >= 15) {
    return <Milionare />;
  }

  return (
    <div className="MainDiv">
      {questions.length > 0 && (
        <QuestionDisplay
          questionnr={questions[qCount]?.question || "Nema pitanja"}
        />
      )}
      <Rewards correctAnswersCount={correctAnswersCount} />
      {questions.length > 0 && (
        <Answers
          ans0={questions[qCount]?.answer[0] || ""}
          ans1={questions[qCount]?.answer[1] || ""}
          ans2={questions[qCount]?.answer[2] || ""}
          ans3={questions[qCount]?.answer[3] || ""}
          onAnswerClick={(index) => handleAnswerClick(index)} // Prosljeđuje indeks odgovora
        />
      )}
    </div>
  );
}
