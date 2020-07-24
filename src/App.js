import React, { useState } from "react";
import Icon from "./components/icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const gameBoard = new Array(9).fill("empty");

const App = () => {
  // State Declaration
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [movesCount, setMovesCount] = useState(0);

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    setMovesCount(0);
    gameBoard.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (
      gameBoard[0] === gameBoard[1] &&
      gameBoard[0] === gameBoard[2] &&
      gameBoard[0] !== "empty"
    ) {
      setWinMessage(`${gameBoard[0]} Wins`);
    } else if (
      gameBoard[3] === gameBoard[4] &&
      gameBoard[3] === gameBoard[5] &&
      gameBoard[3] !== "empty"
    ) {
      setWinMessage(`${gameBoard[3]} Wins`);
    } else if (
      gameBoard[6] === gameBoard[7] &&
      gameBoard[6] === gameBoard[8] &&
      gameBoard[6] !== "empty"
    ) {
      setWinMessage(`${gameBoard[6]} Wins`);
    } else if (
      gameBoard[0] === gameBoard[3] &&
      gameBoard[0] === gameBoard[6] &&
      gameBoard[0] !== "empty"
    ) {
      setWinMessage(`${gameBoard[0]} Wins`);
    } else if (
      gameBoard[1] === gameBoard[4] &&
      gameBoard[1] === gameBoard[7] &&
      gameBoard[1] !== "empty"
    ) {
      setWinMessage(`${gameBoard[1]} Wins`);
    } else if (
      gameBoard[2] === gameBoard[5] &&
      gameBoard[2] === gameBoard[8] &&
      gameBoard[2] !== "empty"
    ) {
      setWinMessage(`${gameBoard[2]} Wins`);
    } else if (
      gameBoard[0] === gameBoard[4] &&
      gameBoard[0] === gameBoard[8] &&
      gameBoard[0] !== "empty"
    ) {
      setWinMessage(`${gameBoard[0]} Wins`);
    } else if (
      gameBoard[2] === gameBoard[4] &&
      gameBoard[2] === gameBoard[6] &&
      gameBoard[2] !== "empty"
    ) {
      setWinMessage(`${gameBoard[2]} Wins`);
    } else if (movesCount === 8 && winMessage === "") {
      setWinMessage(`Game Draw`);
    }
  };

  const changeSignOnBoard = (boardIndex) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (gameBoard[boardIndex] === "empty") {
      gameBoard[boardIndex] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
      setMovesCount(movesCount + 1);
    } else {
      return toast("Already Filled", { type: "error" });
    }
    checkIsWinner();
  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <h1 style={{ textAlign: "center", color: "#ffffff" }}>
        React Tic-Tac-Toe
      </h1>
      <br />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button color="success" block onClick={reloadGame}>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "X" : "0"} Turn
            </h1>
          )}
          <div className="grid">
            {gameBoard.map((boardIndexValue, index) => (
              <Card key={index} onClick={() => changeSignOnBoard(index)}>
                <CardBody className="box">
                  <Icon name={boardIndexValue} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
