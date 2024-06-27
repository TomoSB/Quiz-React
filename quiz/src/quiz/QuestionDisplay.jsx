import { useEffect } from "react";

export default function QuestionDisplay() {
  console.log(" QuestionDisplay je pozvana");
  //fetchati data i onda baratmo sa questions

  useEffect(() => {
    fetch("public/question.json")
      .then((response) => response.json())
      .then((odg) => console.log(odg));
  });

  return (
    <>
      <div className="QuestionDiv">
        ovo je question div, u njega ucitati pitanje iz jsonaaa
      </div>
    </>
  );
}
