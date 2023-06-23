

export default function QuartoPiece({piece}) {
    let imgURL;
    let imgAlt;
    
    if (piece === "none") {
        return (<></>);
    } else if (piece === "Q0") {
        imgURL = "./quarto_pieces/tall_square_white_solid_128.png";
        imgAlt = "tall square white solid";
    } else {
        imgURL = "";
        imgAlt = piece
    }
    
    const style = {width: "100px", height: "100px"}
    
    let pieceImage = (
    <>
        <img style={style} src={imgURL} alt={imgAlt} />
    </>); 

    return pieceImage;
}