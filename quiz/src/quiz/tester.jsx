import { useEffect, useState } from "react";

export default function QuestionDisplay() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("/question.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Učitani podaci:", data);
        setQuestions(data.questions || []); // Postavi pitanja, proveri da li 'questions' postoji
      })
      .catch((error) => console.error("Greška pri učitavanju pitanja:", error));
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      console.log("Prvo pitanje:", questions[0].question);
    }
  }, [questions]); // Ova useEffect se pokreće kada se `questions` promeni

  return (
    <>
      <div className="QuestionDiv">
        {/* Ovdje možete dodati bilo kakav UI za prikaz pitanja */}
      </div>
    </>
  );
}
