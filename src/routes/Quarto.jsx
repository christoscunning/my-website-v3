import React from 'react'


// Renders the 16 different quarto pieces
class QuartoPiece extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "",
            style: {},
            mouseX: 0,
            mouseY: 0,
            dragging: false,
        }
    }
    
    getPiece() {
        let url
        let alttext
        switch(this.props.piece_type) {
            case "Q1":
                // Tall Square White Solid
                url = "/quarto_pieces/tall_square_white_solid_128.png";
                alttext = "tall square white solid"
                break;
            case "Q2":
                // Tall Square White Hollow
                url = "/quarto_pieces/tall_square_white_hollow_128.png";
                alttext = "tall square white hollow";
                break;
            case "Q3":
                // Tall Sqaure Black Solid
                url = "/quarto_pieces/tall_square_black_solid_128.png";
                alttext = "tall square black solid";
                break;
            case "Q4":
                // Tall Sqaure Black Hollow
                url = "/quarto_pieces/tall_square_black_hollow_128.png";
                alttext = "tall square black hollow";
                break;
            default:
                // do nothing
        }
        
        //let full_path = process.env.PUBLIC_URL + url;
        let full_path = url;    
        console.log(full_path);
        return {
            url: full_path,
            alt: alttext,
        };
    }

    handleEvent = (event) => {
        if (event.type === 'mousedown') {
            console.log("mouse down on piece");
            this.setState({
                dragging: true,
            })
        }
        if (event.type === 'mouseup') {
            console.log("mouse up on piece");
            this.setState({
                dragging: false,
                style: {},
            });
        }
    }

    onMouseMove(event) {
        this.setState({
            mouseX: event.clientX,
            mouseY: event.clientY,
        });
        console.log("mousex: " + this.state.mouseX)
        console.log("mousey: " + this.state.mouseY)
        if (this.state.dragging === true) {
            this.setState({
                style: {
                    "zIndex": 2,
                    "position": "absolute",
                    "left": this.state.mouseX - 50,
                    "top": this.state.mouseY + 50,
                },
            });
        }
    }

    preventDefaultDragHandler = (e) => {
        e.preventDefault();
    }

    render() {
        if (this.props.piece_type === "NONE") {
            return (
                <span></span>
            );
        } else {
            const piece = this.getPiece();
            return (
                <div onMouseDown={this.handleEvent}
                    onMouseUp={this.handleEvent}
                    onMouseMove={this.onMouseMove.bind(this)}
>
                    <img 
                        onDragStart={this.preventDefaultDragHandler}

                        className='quartoPiece100'
                        src={piece.url}
                        alt={piece.alt}

                        style={this.state.style}
                    >
                    </img>
                </div>
            );
        }
    }
}


/*
    Squares make up the 4 x 4 game grid of Quarto
*/
class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //piece: null,
        };
    }

    render() {
        return (
            <div className='quartoSquare128'>
                <QuartoPiece
                    className="square" 
                    piece_type={this.props.piece_type}
                ></QuartoPiece>
            </div>
        );
    }
}

class Board extends React.Component {
    
    renderSquare(i) {
        return (
            <Square
                piece_type={this.props.squares[i]}
            />
        );
    }

    render() {
        return (
            <div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                {this.renderSquare(3)}
              </div>
              <div className="board-row">
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                {this.renderSquare(6)}
                {this.renderSquare(7)}
              </div>
              <div className="board-row">
                {this.renderSquare(8)}
                {this.renderSquare(9)}
                {this.renderSquare(10)}
                {this.renderSquare(11)}
              </div>
              <div className="board-row">
                {this.renderSquare(12)}
                {this.renderSquare(13)}
                {this.renderSquare(14)}
                {this.renderSquare(15)}
              </div>
            </div>
          );
    }
}

class UnplayedPieces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unplayedPieces: this.props.unplayedPieces,
        };
    }

    render() {
        const unplayedPieces = Array(this.state.unplayedPieces.size)
        for (const piece of this.state.unplayedPieces) {
            unplayedPieces.push(
                <div className='unplayed-piece-square'>
                    <QuartoPiece piece_type={piece}/>
                </div>
            );
        }
        return(
            <div className='unplayed-piece-container'>
                {unplayedPieces}
            </div>
        );
    }
}

class QuartoGame extends React.Component {
    constructor(props) {
        super(props);
        let pieces = new Set([
            "Q1", "Q2", "Q3", "Q4", 
            "Q5", "Q6", "Q7", "Q8",
            "Q9", "Q10", "Q11", "Q12",
            "Q13", "Q14", "Q15", "Q16"
        ]);
        this.state = {
            squares: Array(16).fill("NONE"),
            unplayedPieces: pieces,
        };
    }

    testPiece() {
        const squares = this.state.squares;
        const unplayedPieces = this.state.unplayedPieces;

        squares[0] = "Q1";
        unplayedPieces.delete("Q1");

        this.setState({
            squares: squares
        });
    }

    render() {

        let statusMsg = "Next player is: ";

        return (
			<div className="game">
				<div className="game-board">
					<Board 
						squares={this.state.squares}
					/>
				</div>
				<div className="game-info">
					<div>{statusMsg}</div>
                    <button onClick={() => this.testPiece()}>Test Piece</button>
				</div>
                <div className="row-break"></div>
                <div className="unplayed-pieces">
                    <p>Unplayed Pieces</p>
                    <UnplayedPieces
                        unplayedPieces={this.state.unplayedPieces}
                    />
                </div>
			</div>
		);
    }
}

export default QuartoGame;

// ================================================
/*
ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
*/