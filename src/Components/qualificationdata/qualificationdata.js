import React, { useRef, useEffect, useState } from "react";
import Image from "../../assect/images/logo.png";
import Button from "react-bootstrap/Button";
import Style from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default () => {
  // const plugins = [ CSSPlugin, AttrPlugin ];
  const listOfName = [
    "Lara",
    "Kate",
    "Amanda",
    "Lily",
    "Lucy",
    "Annie",
    "Gennifer",
    "Ash",
    "Alyssa",
    "Alura",
    "Ansley",
    "Dina"
  ];
  const [questions, setQuestions] = useState([
    {
      question: "Hi, I hope you're having a Good Afternoon : )",
      takeInput: false  
    },
    {
      question: `My name is ${
        listOfName[Math.floor(Math.random() * 12)]
      }, I’m going to take you through your debt assessment test today.`,
      takeInput: false
    },
    {
      question:
        "At the end you’ll know if you qualify for help, and if you are potentially able to write-off a large % of your debt.?",
      takeInput: false
    },
    {
      question:
        "What is your name?",
      takeInput: false
    },
    {
      question: "My Name is?",
      takeInput: true,
      value: "",
      name: "name"
    },
    { 
       question: `Nice to meet you {{name}}.`, takeInput: false},
    {
      question:
        " So just before we start I need to make you aware that by using our service, you agree to our standard terms and privacy policy. Is that ok? ",
      takeInput: false
    },
  ]);
  const [showQuestions, setShowQuestions] = useState([{ question: "typing" }]);
  return (
    <>
      <div className="container-fluid container-all">
        <div className="row space-between">
          <img className="mt-2" src={Image}></img>
          <div>
            <i className="fa fa-lock"></i>
            <Button className="around-button" variant="primary">
              Secure Website
            </Button>
          </div>
        </div>
      </div>

      {/* 2nd section chat */}

      <div className="container-fluid section2">
        <div className="column">
          {showQuestions &&
            showQuestions.length !== 0 &&
            showQuestions.map((single, index) => {
              if (single.question === "typing") {
                setTimeout(() => {
                  let newMessate = [...showQuestions];
                  if (questions[index] && !questions[index].takeInput) {
                    // sound here
                    questions &&
                    questions[index].question.indexOf("{{name}}") !== -1
                      ? (questions[index].question = questions[
                          index
                        ].question.replace(
                          "{{name}}",
                          questions[index - 1].value
                        ))
                      : (questions[index].question = questions[index].question);
                    newMessate[index].question = questions[index].question;
                  } else {
                    newMessate[index] = questions[index];
                  }
                  if (questions[index + 1] && !questions[index].takeInput) {
                    newMessate.push({ question: "typing" });
                  }
                  setShowQuestions(newMessate);
                }, 3000);
                return (
                  <div className="ml-5 mt-4">
                    <div className="d-flex Loader">
                    <Loader 
                      type="ThreeDots"
                      color="purple"
                      height={80}
                      width={80}
                    />
                     </div>
                  </div>
                );
              } else if (!single.takeInput) {
                return (
                  <div className="chat1">
                    <div className="chat1-inside-data">
                      <p className="ml-4 pt-4 p">{single.question}</p>
                    </div>
                  </div>
                );
              } else if (single.takeInput) {
                return(
                  <div className="chat-input">
                    <div className="chat-input-data">
                      
                      <p className="p ml-5" style={{color:"white"}}>{single.question}</p>
                      <input placeholder="Forename" className="input mt-4 ml-4"
                        onChange={event => {
                          let newMessate = [...showQuestions];
                          newMessate[index].value = event.target.value;
                          setShowQuestions(newMessate);
                        }}
                      ></input>
                      <Button variant="secondary" className="button ml-2"
                        onClick={() => {
                          let newMessate = [...showQuestions];
                          newMessate.push({ question: "typing" });
                          setShowQuestions(newMessate);
                        }}
                      >
                        Go
                      </Button>
                    
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <Style/>
    </>
  );
};
