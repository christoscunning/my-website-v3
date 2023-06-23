import QuartoPiece from "./QuartoPiece";
import Square from "./Square";

function renderSquare(i, piece, movePiece) {
    const x = i % 4;
    const y = Math.floor(i / 4);

    const squareStyle = {
        width: "25%",
        height: "25%",
        border: "1px solid black"
    }

    return (
        <div key={i} style={squareStyle} onClick={() => movePiece(i, piece)}>
            <Square>
                <QuartoPiece piece={piece}/>
            </Square>
        </div>
    );
}

/*
    'squarePieces': indicates which (if any) piece is on each square.
    Has a value for each square, that is "none", or "Qx", where x [0,16]
*/
export default function Board({squarePieces, movePiece}) {
    
    const boardStyle = {
        // width: "100%", 
        // height: "100%",
        width: "400px",
        height: "400px",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid black"
    };

    const squares = [];
    for (let i = 0; i < 16; i++) {
        let piece = "none";
        squares.push(renderSquare(i, squarePieces[i], movePiece));
    }

    return (
        <>
            <div style={boardStyle}>
                {squares}
            </div>
        </>
    );
}