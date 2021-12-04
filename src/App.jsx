import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is the son of Lord Shree Krishna?",
      answers: [
        {
          text: "Pradyumna",
          correct: true,
        },
        {
          text: "Bhisma",
          correct: false,
        },
        {
          text: "Shaga",
          correct: false,
        },
        {
          text: "Anirud",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "India launched the YEAR OF THE ENVIRONMENT with which friendly country?",
      answers: [
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "France",
          correct: true,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Buthan",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is B.1.617, which is seen in the new recently?",
      answers: [
        {
          text: "air to air missile",
          correct: false,
        },
        {
          text: "new planet",
          correct: false,
        },
        {
          text: "covid 19 variant",
          correct: true,
        },
        {
          text: "hydrogen fuel cell",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "what is the full from of AC?",
      answers: [
        {
          text: "After Christ",
          correct: false,
        },
        {
          text: "Alternating current",
          correct: false,
        },
        {
          text: "After christmas",
          correct: false,
        },
        {
          text: "A & B",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: " Which of this keyword can be used in a subclass to call the constructor of superclass? Which of this keyword can be used in a subclass to call the constructor of superclass?",
      answers: [
        {
          text: "Super",
          correct: true,
        },
        {
          text: "this",
          correct: false,
        },
        {
          text: "super",
          correct: false,
        },
        {
          text: "import",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of these keywords can be used to prevent Method overriding",
      answers: [
        {
          text: "static",
          correct: false,
        },
        {
          text: "constant",
          correct: false,
        },
        {
          text: "protecte",
          correct: false,
        },
        {
          text: "final",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Hanuman Chalisa written by",
      answers: [
        {
          text: "Valmike",
          correct: false,
        },
        {
          text: "Ved Vyas",
          correct: false,
        },
        {
          text: "KabirDas",
          correct: false,
        },
        {
          text: "Tulsidas",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "The three flying cities that Shiva destroyed was known as",
      answers: [
        {
          text: "tripura",
          correct: true,
        },
        {
          text: "sumeru",
          correct: false,
        },
        {
          text: "Meru",
          correct: false,
        },
        {
          text: "Tripitakas",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Euro cup related Which sports",
      answers: [
        {
          text: "Badminton",
          correct: false,
        },
        {
          text: "Football",
          correct: true,
        },
        {
          text: "Table Tennis",
          correct: false,
        },
        {
          text: "Cricket",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "which part of the human Body stores Glycogen?",
      answers: [
        {
          text: "Liver",
          correct: true,
        },
        {
          text: "skin",
          correct: false,
        },
        {
          text: "lungs",
          correct: false,
        },
        {
          text: "pancreas",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "in which city, a digital population clock has been inaugurated",
      answers: [
        {
          text: "hydrabad",
          correct: false,
        },
        {
          text: "mumbai",
          correct: false,
        },
        {
          text: "jaipur",
          correct: false,
        },
        {
          text: "Delhi",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Owner of WWE is",
      answers: [
        {
          text: "Stephne Mcmahon",
          correct: false,
        },
        {
          text: "Shano Mcmahon",
          correct: false,
        },
        {
          text: "TRIPLE H",
          correct: false,
        },
        {
          text: "Vince Mcmahon",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "RS 1000" },
        { id: 2, amount: "RS 5000" },
        { id: 3, amount: "RS 10000" },
        { id: 4, amount: "RS 20000" },
        { id: 5, amount: "RS 25000" },
        { id: 6, amount: "RS 50000" },
        { id: 7, amount: "RS 80000" },
        { id: 8, amount: "RS 1,60000" },
        { id: 9, amount: "RS 3,20000" },
        { id: 10, amount: "RS 6,40000" },
        { id: 11, amount: "RS 12,50000" },
        { id: 12, amount: "RS 25,00000" },
        { id: 13, amount: "RS 50,00000" },
        { id: 14, amount: "RS 100,00000" },
        { id: 15, amount: "RS 500,00000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
