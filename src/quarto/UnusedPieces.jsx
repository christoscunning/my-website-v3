import QuartoPiece from "./QuartoPiece";
import Square from "./Square";

function renderSquare(i, piece, movePiece) {
    const x = i % 4;
    const y = Math.floor(i / 4);

    const squareStyle = {
        width: "100px",
        height: "100px",
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

export default function UnusedPieces({squarePieces, movePiece}) {

    const style = {
        // width: "400px",
        // height: "400px",
        height: "200px",
        width: "802px",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
        border: "1px solid black"
    }

    
    const squares = [];
    for (let i = 0; i < 16; i++) {
        let piece = "none";
        squares.push(renderSquare(i, squarePieces[i], movePiece));
    }


    return (
        <>
            <div style={style}>
                {squares}
            </div>
        </>
    );
}