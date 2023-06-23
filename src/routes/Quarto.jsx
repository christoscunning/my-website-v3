import Board from "../quarto/Board";
import UnusedPieces from "../quarto/UnusedPieces";
import {observe} from "../quarto/QuartoGame"
import { useState } from 'react';
import { Button } from "react-bootstrap";

export default function Quarto () {

    const emptyBoard = [];
    for (let i = 0; i < 16; i++) {
        emptyBoard[i] = "none";
    }

    const initialUnused = [];
    for (let i = 0; i < 16; i++) {
        initialUnused[i] = ("Q" + i);
    }

    // Initialize state with empty board
    const [boardPieces, setBoardPieces] = useState(emptyBoard);
    const [unusedPieces, setUnusedPieces] = useState(initialUnused);

    // Function to move a piece on the board
    function movePiece(i, piece) {
        let newBoard = [...boardPieces]
        let newUnused = [...unusedPieces]

        // Remove piece from old position
        let oldPos = newUnused.findIndex((e) => e === piece)
        if (oldPos != -1) {
            newUnused[oldPos] = "none"
        }
        // Update board state with new position of piece
        newBoard[i] = piece
        setBoardPieces(newBoard)
        setUnusedPieces(newUnused)

        console.log(boardPieces)
        console.log(unusedPieces)
    }

    function resetBoard() {
        setBoardPieces(emptyBoard)
        setUnusedPieces(initialUnused)
    }

    //movePiece(0, "Q1")
    const randPos = () => Math.floor(Math.random() * 16)

    return (
        <>
            <Button onClick={() => resetBoard()}>Reset</Button>
            
            <Board squarePieces={boardPieces} movePiece={movePiece}/>
            
            <br />
            <h4>Unused pieces:</h4>

            <UnusedPieces squarePieces={unusedPieces} movePiece={movePiece}/>
        </>
    );
}