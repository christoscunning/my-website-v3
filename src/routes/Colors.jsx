
function ColorSquare (props) {
    return <div style={{backgroundColor: props.color, width: "4em", height: "4em", marginLeft: "auto", marginRight: "auto"}}></div>
}

export default function CHIP8 () {
    

    return (
        <>
            <div className="container">

                <h3 style={{color: "white"}}>Colors</h3>

                <br />

                <div className="row">
                    <div className="col-sm">
                        {/* Medium Azur */}
                        <h5 style={{color: "white"}}>1A</h5>
                        <ColorSquare color="#36AEBF" />
                        <h5 style={{color: "white"}}>1B</h5>
                        <ColorSquare color="#00BED3" />
                    </div>
                    <div className="col-sm">
                        {/* Bright Yellowish Green */}
                        <h5 style={{color: "white"}}>2A</h5>
                        <ColorSquare color="#95B90B" />
                        <h5 style={{color: "white"}}>2A</h5>
                        <ColorSquare color="#9ACA3A" />
                    </div>
                    <div className="col-sm">
                        {/* Sand Green */}
                        <h5 style={{color: "white"}}>3A</h5>
                        <ColorSquare color="#A0BCAC" />
                        <h5 style={{color: "white"}}>3B</h5>
                        <ColorSquare color="#6F947A" />
                    </div>
                    <div className="col-sm">
                        {/* Brick Yellow */}
                        <h5 style={{color: "white"}}>4A</h5>
                        <ColorSquare color="#E4CD9E" />
                        <h5 style={{color: "white"}}>4B</h5>
                        <ColorSquare color="#DDC48E" />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-sm">
                        {/* Medium Lilac */}
                        <h5 style={{color: "white"}}>5A</h5>
                        <ColorSquare color="#3F3691" />
                        <h5 style={{color: "white"}}>5B</h5>
                        <ColorSquare color="#4C2F92" />
                    </div>
                    <div className="col-sm">
                        {/* Flame Yellowish Orange */}
                        <h5 style={{color: "white"}}>6A</h5>
                        <ColorSquare color="#F8BB3D" />
                        <h5 style={{color: "white"}}>6B</h5>
                        <ColorSquare color="#F49B00" />
                    </div>
                    <div className="col-sm">
                        {/* Dark Red */}
                        <h5 style={{color: "white"}}>7A</h5>
                        <ColorSquare color="#720E0F" />
                        <h5 style={{color: "white"}}>7B</h5>
                        <ColorSquare color="#7F131B" />
                    </div>
                    <div className="col-sm">
                        {/* Reddish Brown */}
                        <h5 style={{color: "white"}}>8A</h5>
                        <ColorSquare color="#582A12" />
                        <h5 style={{color: "white"}}>8B</h5>
                        <ColorSquare color="#692E14" />
                    </div>
                </div>
                
                <br />

                <div className="row">
                    <div className="col-sm">
                        {/* Bright Blue */}
                        <h5 style={{color: "white"}}>9A</h5>
                        <ColorSquare color="#0055BF" />
                        <h5 style={{color: "white"}}>9B</h5>
                        <ColorSquare color="#006CB7" />
                    </div>
                    <div className="col-sm">
                        {/* Bright Red */}
                        <h5 style={{color: "white"}}>10A</h5>
                        <ColorSquare color="#C91A09" />
                        <h5 style={{color: "white"}}>10B</h5>
                        <ColorSquare color="#DD1A21" />
                    </div>
                    <div className="col-sm">
                        {/* Bright Yellow */}
                        <h5 style={{color: "white"}}>11A</h5>
                        <ColorSquare color="#F2CD37" />
                        <h5 style={{color: "white"}}>11B</h5>
                        <ColorSquare color="#FFCD03" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        {/* White */}
                        <h5 style={{color: "white"}}>12A</h5>
                        <ColorSquare color="#FFFFFF" />
                        <h5 style={{color: "white"}}>12B</h5>
                        <ColorSquare color="#F4F4F4" />
                    </div>
                    <div className="col-sm">
                        {/* Medium Stone Grey */}
                        <h5 style={{color: "white"}}>13A</h5>
                        <ColorSquare color="#A0A5A9" />
                        <h5 style={{color: "white"}}>13B</h5>
                        <ColorSquare color="#A0A19F" />
                    </div>
                    <div className="col-sm">
                        {/* Black */}
                        <h5 style={{color: "white"}}>14A</h5>
                        <ColorSquare color="#05131D" />
                        <h5 style={{color: "white"}}>14B</h5>
                        <ColorSquare color="#151515" />
                    </div>
                    <div className="col-sm">
                        {/* Dark Stone Grey */}
                        <h5 style={{color: "white"}}>15A</h5>
                        <ColorSquare color="#6C6E68" />
                        <h5 style={{color: "white"}}>15B</h5>
                        <ColorSquare color="#646765" />
                    </div>
                </div>

            </div>
        </>
    )
}