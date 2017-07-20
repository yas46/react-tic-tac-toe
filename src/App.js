import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            PLAYER_ONE_SYMBOL: "X",
            PLAYER_TWO_SYMBOL: "O",
            currentTurn: "X",
            writeMark: "X",
            X_CLASS: "square blue",
            O_CLASS: "square red",
            boardArr: ["","","", "", "", "", "", "", "", ""],
            colorArr: ["square","square","square", "square", "square", "square", "square", "square", "square"]
        };
    }

    switchTurn() {
        let currentTurn = this.state.currentTurn == this.state.PLAYER_ONE_SYMBOL ? this.state.PLAYER_TWO_SYMBOL : this.state.PLAYER_ONE_SYMBOL;
        this.setState({
            currentTurn: currentTurn,
        });
    }

    clearBoard() {
        console.log("reset");
        this.state.boardArr = this.state.boardArr.map(() => {
            return " ";
        });
        this.state.colorArr = this.state.colorArr.map(() => {
            return "square";
        });
        this.setState({
            boardArr: this.state.boardArr,
            colorArr: this.state.colorArr
        });
  }

    resetGame() {
        console.log("reset");
        this.state.boardArr = this.state.boardArr.map(() => {
            return " ";
        });
        this.state.colorArr = this.state.colorArr.map(() => {
            return "square";
        });
        this.setState({
            boardArr: this.state.boardArr,
        });
    }

    checkWinner() {
        let mark = this.state.boardArr;
        if ((mark[0] != "") && (mark[0] == mark[1]) && (mark[0] == mark[2])) {
            this.resetGame();
            return mark[0];
        } else if ((mark[3] != "") && (mark[3] == mark[4]) && (mark[3] == mark[5])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[6] != "") && (mark[6] == mark[7]) && (mark[6] ==       mark[8])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[0] != "") && (mark[0] == mark[3]) && (mark[0] == mark[6])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[1] != "") && (mark[1] == mark[4]) && (mark[1] == mark[7])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[2] != "") && (mark[2] == mark[5]) && (mark[2] == mark[8])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[0] != "") && (mark[0] == mark[4]) && (mark[0] == mark[8])) {
            this.resetGame();
            return mark[4];
        } else if ((mark[2] != "") && (mark[2] == mark[4]) && (mark[2] == mark[6])) {
            this.resetGame();
            return mark[4];
        }
    }

    clickHandler(i) {
        if (this.state.boardArr[i] == "") {
            this.state.boardArr[i] = this.state.currentTurn;
            this.setState({
                boardArr: this.state.boardArr
            });
            this.state.colorArr[i] = this.state.boardArr[i] == this.state.PLAYER_ONE_SYMBOL ? this.state.X_CLASS : this.state.O_CLASS;
            this.setState({
                colorArr: this.state.colorArr
            });
            this.switchTurn();
            this.checkWinner();
            this.render();
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>React Tic Tac Toe</h2>
                </div>
                <div id="board">
                    {this.state.boardArr.map((square, index) => {
                        let i = index + 1;
                        return <div onClick={this.clickHandler.bind(this, index)} className={this.state.colorArr[index]} id={"s"+i}>{square}</div>
                    })}
                </div>
            </div>
        );
    }
}

export default App;
