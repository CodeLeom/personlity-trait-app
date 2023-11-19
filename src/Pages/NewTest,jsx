import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import BackBtn from "../components/BackBtn";

function NewTest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState({ introvert: 0, extrovert: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3500/questions")
      .then((res) => {
        setQuestions(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching questions: ", err);
      });
  }, []);

  const handleAnswer = (introvertScore, extrovertScore) => {
    setScore((prev) => ({
      introvert: prev.introvert + introvertScore,
      extrovert: prev.extrovert + extrovertScore,
    }));
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const getResult = () => {
    return score.introvert > score.extrovert ? "Introvert" : "Extrovert";
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <BackBtn url={"/"} />
      <section className="heading">
        <h3>Personality Test</h3>
        <p>Answer the questions below to determine your Personality</p>
      </section>

      <section>
        {currentQuestionIndex < questions.length ? (
          <div className="question-desc">
            <h1>{questions[currentQuestionIndex].text}</h1>
            <button
              className="btn"
              role="button"
              onClick={() =>
                handleAnswer(questions[currentQuestionIndex].introvertScore, 0)
              }
            >
              Yes
            </button>
            <button
              className="btn"
              onClick={() =>
                handleAnswer(0, questions[currentQuestionIndex].extrovertScore)
              }
            >
              No
            </button>
          </div>
        ) : (
          <h1 className="result">You are an {getResult()}!</h1>
        )}
      </section>
    </>
  );
}

export default NewTest;