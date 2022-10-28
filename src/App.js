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
        backgroundColor: "white",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: "0 0 0 0",
          width: "20vw",
        }}
      >
        {cards.map((card, index) => (
          <button
            style={{ width: "100%", height: "2vh" }}
            onClick={() => {
              let num = card.questionNum;
              let newStateObj = {};
              for (let num in stateObj) {
                newStateObj[num] = false;
              }
              newStateObj[num] = true;
              setStateObj(newStateObj);
              console.log(stateObj);
            }}
            key={index}
          >
            {card.questionNum}
          </button>
        ))}
      </ul>
      <ul>
        {cards.map((card, index) => {
          if (stateObj[card.questionNum]) {
            return <CardFunc key={index} card={card} />;
          } else {
            return <p key={index}></p>;
          }
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
          height: "90vh",
          width: "70vw",
          marginRight: "15vw",
          backgroundColor: "white",
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
          {card.question}
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
      <>
        <button
          style={{
            backgroundColor: "white",
            height: "90vh",
            width: "70vw",
            marginRight: "15vw",
            paddingBottom: "60%",
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
      </>
    );
  }
}

export default App;
