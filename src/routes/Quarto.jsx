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

    // Loading state
    const [isBoardLoading, setBoardLoading] = useState(true);
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
        setBoardLoading(false);
    }

    const getBoard = async () => {
        try {
            // setBoardPieces
            const response = await fetch('http://localhost:8000/quarto/get_board_state/16');
            const json = await response.json();
            
            const newBoard = [];
            // assume all empty
            for (let i = 0; i < 16; i++) {
                emptyBoard[i] = "none";
            }
            // add pieces from response
            console.log(json);
            const board = json['board']
            board.forEach(function (boardPiece) {
                console.log(boardPiece)
                const boardPos = parseInt(boardPiece['board_position'].substring(1));
                console.log(boardPos)
                const pieceType = boardPiece['piece_type'];
                console.log(pieceType);
                newBoard[boardPos] = pieceType;
            });
            console.log(newBoard);
            setBoardPieces(newBoard);

            
            // setUnusedPieces
            const response2 = await fetch('http://localhost:8000/quarto/get_unused_pieces/16');
            const json2 = await response2.json();
            
            const newUnused = [];
            console.log(json2);
            const unused = json2['unused']
            unused.forEach(function (unusedPiece) {
                newUnused.push(unusedPiece['piece_type']);
            });
            console.log(newUnused);
            setUnusedPieces(newUnused);


        } catch (error) {
            console.error(error);
        } finally {
            setBoardLoading(false);
        }
    };

    function loadBoard() {
        setBoardLoading(true);
        getBoard();
    }

    //movePiece(0, "Q1")
    const randPos = () => Math.floor(Math.random() * 16)

    return (
        <>
            <Button onClick={() => resetBoard()}>Reset Game</Button>
            
            <Button onClick={() => loadBoard()}>Load Game</Button>

            { isBoardLoading ? (
                <>Board loading...</>
            ) : (
                <>
                    <Board squarePieces={boardPieces} movePiece={movePiece}/>
                                
                    <br />
                    <h4>Unused pieces:</h4>

                    <UnusedPieces squarePieces={unusedPieces} movePiece={movePiece}/>
                </>
            )
                
            }
        </>
    );
}