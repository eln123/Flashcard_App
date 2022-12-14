import "./App.css";
import cards from "./flashcards";
import { useState } from "react";

function App() {
  let stateObjInput = cards.reduce((accum, card) => {
    let questionNum = card.questionNum;
    if (questionNum === 1) {
      accum[`${questionNum}`] = true;
    } else {
      accum[`${questionNum}`] = false;
    }
    return accum;
  }, {});

  let [stateObj, setStateObj] = useState(stateObjInput);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        backgroundColor: "gold",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "0 0 0 0",
          paddingRight: "50px",
          width: "20vw",
          height: "70vh",
          marginLeft: "40px",
          marginTop: "70px",
          overflowY: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            marginLeft: "50%",
            transform: "translateX(-50%)",
            paddingTop: "15px",
            color: "Black",
            fontWeight: "bold",
          }}
        >
          Total questions: {cards[cards.length - 1].questionNum}
        </h2>
        {cards.map((card, index) => (
          <button
            style={{
              width: "100%",
              height: "2vh",
              marginLeft: "20px",
              marginTop: "10px",
              marginRight: "20px",
              fontWeight: "600",
              fontSize: "14px",
              backgroundColor: "white",

              border: "none",
            }}
            onClick={() => {
              let num = card.questionNum;
              let newStateObj = {};
              for (let num in stateObj) {
                newStateObj[num] = false;
              }
              newStateObj[num] = true;
              setStateObj(newStateObj);
            }}
            key={index}
          >
            question {card.questionNum}
          </button>
        ))}
      </ul>
      <ul>
        {cards.map((card, index) => {
          if (stateObj[card.questionNum]) {
            return <CardFunc key={index} card={card} />;
          }
          return null;
        })}
      </ul>
    </div>
  );
}

// remember React functions have to be capatilized
// CardFunc works, but cardFunc does not!
function CardFunc({ card }) {
  let side = card.side;
  const [cardSide, setCard] = useState(side);
  // when you get an error that says "too many re renders" from
  // react-dom-development
  // make sure that the onClick function
  // is a higher order function
  // that calls setCard
  // and has the option to take in a parameter
  //

  if (cardSide) {
    return (
      <button
        style={{
          height: "70vh",
          width: "70vw",
          marginRight: "15vw",
          backgroundColor: "white",
          paddingBottom: "50%",
        }}
        onClick={() => setCard(!cardSide)}
      >
        <h2
          style={{
            marginLeft: "50%",
            transform: "translateX(-50%)",
            fontSize: "25px",
          }}
        >
          {card.questionNum}) {card.question}
        </h2>
        <ul style={{ marginLeft: "-10%", marginBottom: "50%" }}>
          {card.possibleAnswers.map((answer, index) => (
            <li
              style={{
                width: "20vw",
                marginLeft: "50%",
                transform: "translateX(-50%)",
                fontSize: "23px",
                paddingTop: "5vh",
              }}
              key={index}
            >
              {answer}
            </li>
          ))}
        </ul>
      </button>
    );
  } else {
    return (
      <button
        style={{
          backgroundColor: "white",
          height: "70vh",
          width: "70vw",
          marginRight: "15vw",
          paddingBottom: "50%",
          fontSize: "23px",
        }}
        id="card"
        onClick={() => setCard(!cardSide)}
      >
        {card.answer.map((answer, index) => (
          <li
            style={{
              marginLeft: "50%",
              marginTop: "5%",
              transform: "translateX(-50%)",
            }}
            key={index}
          >
            {answer}
          </li>
        ))}
      </button>
    );
  }
}

export default App;
