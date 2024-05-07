import React, { useState } from 'react'
import styles from "./gameboard.module.css"
import Cell from '../cell/Cell';
let array = new Array(9).fill(null);
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function Gameboard() {
    const [Xturn, setXturn] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [gameOverText, setGameOverText] = useState("");
    const handleCLick = (index) => {
        if (Xturn) {
            array[index] = 'X';
        }
        else {
            array[index] = 'O';
        }
        setXturn((prev) => !prev);
        checkWinnner(array);
    }
    function checkWinnner(array) {
        console.log(array);

        winConditions.map((arr) => {
            if (array[arr[0]] === array[arr[1]] && array[arr[0]] === array[arr[2]] && array[arr[0]] !== null) {
                console.log(`winner is ${array[arr[0]]}`)
                setGameOverText(`winner is ${array[arr[0]]}`);
                setGameOver(true);
            }
        })
        if (array.includes(null) == false) {
            setGameOverText(`DRAW !!!`);
            setGameOver(true);
        }
        return null;
    }
    const handleReset = () => {
        array = new Array(9).fill(null);
        setGameOverText(``);
        setGameOver(false);
    }
    if (gameOver) {
        return (
            <div className={styles.gameOverContainer}>
                <h2 className={styles.gameOverMessage}>{gameOverText}</h2>
                <button className={styles.resetButton} onClick={handleReset}>Reset</button>
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.board}>
                {array.map((item, index) => {
                    return <Cell i={index} key={index} onCick={handleCLick} array={array} />
                })}
            </div>
        </div>
    )
}

export default Gameboard